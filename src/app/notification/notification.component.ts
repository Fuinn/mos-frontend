import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../root-store/root-store.state';
import { PusherService } from '../services/pusher.service';
import { RunNotification } from '../data-models/notification';
import { ModelGetRequestAction } from '../root-store/root-store.actions';
import { Token } from '../data-models/token';
import { selectToken } from '../root-store/root-store.selectors';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  private channel: any = null;
  token$: Observable<Token>;

  constructor(
    private store$: Store<State>,
    private toastService: ToastrService,
    private pusherService: PusherService) {}

  ngOnInit() {

    this.token$ = this.store$.select(selectToken);

    this.token$.subscribe( 
      (token: Token) => {
        
        if (!token) {
          return;
        }

        this.channel = this.pusherService.getPusher(token.user_id);
        
        // Listening
        this.channel.subscribe((data: RunNotification) => {
          if (data.status == 'success') {
            this.toastService.success('Status: Done!', `${data.model_name}`);
            this.store$.dispatch(new ModelGetRequestAction({ id: +data.model_id }));
          }
          else if (data.status == 'error') {
            this.toastService.error('Status: Error!', `${data.model_name}`);
            this.store$.dispatch(new ModelGetRequestAction({ id: +data.model_id }));
          }
          else if (data.status == 'running') {
            this.toastService.info('Status: Running!', `${data.model_name}`);
            this.store$.dispatch(new ModelGetRequestAction({ id: +data.model_id }));
          }
          else if (data.status == 'queued') {
            this.toastService.show('Status: Queued!', `${data.model_name}`);
          }
          else {
            console.log('Invalid notification received');
          }
        });
      });

    // Error
    // this.error$ = this.store$.select(selectError);
    // this.error$.subscribe(
    //   (e: string) => {
    //     if (e !== null) {
    //       this.toastService.error('Error!', 'Something is not right');
    //     }
    //   });
  }
}
