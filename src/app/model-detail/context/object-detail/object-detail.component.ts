import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { State } from 'src/app/root-store/root-store.state'
import { Model } from 'src/app/data-models/model';
import { HelperObject } from 'src/app/data-models/helper-object';
import { 
  selectModel,
  selectHelperObject,
  selectObjectData } from 'src/app/root-store/root-store.selectors';
import { ObjDataRequestAction, 
         ObjDataClearAction } from 'src/app/root-store/root-store.actions';

@Component({
  selector: 'app-helper-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrls: ['./object-detail.component.css']
})
export class HelperObjectDetailComponent implements OnInit, OnDestroy {

  private paramMapSubscription: Subscription;
  private objSubscription: Subscription;
  private dataSubscription: Subscription;
  model$: Observable<Model>;
  object$: Observable<HelperObject>;
  data$: Observable<any>;
  data: any;

  constructor(
    private store$: Store<State>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.model$ = this.store$.select(selectModel);
    this.paramMapSubscription = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.object$ = this.store$.select(selectHelperObject, { id: +params.get('id') });
      });
    this.objSubscription = this.object$.subscribe(
      (oo: HelperObject) => {
        if (oo.data) {
          this.store$.dispatch(new ObjDataRequestAction({ o: oo }));
        }
        else {
          this.store$.dispatch(new ObjDataClearAction({}));
        }
      });
    this.data$ = this.store$.select(selectObjectData);
    this.dataSubscription = this.data$.subscribe(
      (d: any) => {
        this.data = d;
      });
  }

  ngOnDestroy() {
    this.paramMapSubscription.unsubscribe();
    this.objSubscription.unsubscribe();
    this.dataSubscription.unsubscribe(); 
  }
}
