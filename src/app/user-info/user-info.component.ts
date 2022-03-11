import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from 'src/app/root-store/root-store.state';
import { selectToken } from 'src/app/root-store/root-store.selectors';
import { Token } from '../data-models/token';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  token$: Observable<Token>;

  constructor(
    private store$: Store<State>,
    public activeModal: NgbActiveModal) { } 

  ngOnInit() {
    this.token$ = this.store$.select(selectToken);
  }

  close() {
    this.activeModal.close('Close')
  }
}
