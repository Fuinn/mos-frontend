import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { State } from 'src/app/root-store/root-store.state'
import { Model } from 'src/app/data-models/model';
import { Function } from 'src/app/data-models/function';
import { selectFunction, selectModel } from 'src/app/root-store/root-store.selectors';


@Component({
  selector: 'app-function-detail',
  templateUrl: './function-detail.component.html',
  styleUrls: ['./function-detail.component.css']
})
export class FunctionDetailComponent implements OnInit, OnDestroy {

  private paramMapSubscription: Subscription;
  model$: Observable<Model>;
  function$: Observable<Function>;

  constructor(
    private store$: Store<State>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.model$ = this.store$.select(selectModel);
    this.paramMapSubscription = this.route.paramMap.subscribe( 
      (params: ParamMap) => { 
        this.function$ = this.store$.select(selectFunction, { id: +params.get('id')});
      });
  }

  ngOnDestroy() {
    this.paramMapSubscription.unsubscribe()
  }
}
