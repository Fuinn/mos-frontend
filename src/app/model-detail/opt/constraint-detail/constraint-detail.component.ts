import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { State } from 'src/app/root-store/root-store.state'
import { Model } from 'src/app/data-models/model';
import { Constraint } from 'src/app/data-models/constraint';
import { selectModel, selectConstraint } from 'src/app/root-store/root-store.selectors';


@Component({
  selector: 'app-constraint-detail',
  templateUrl: './constraint-detail.component.html',
  styleUrls: ['./constraint-detail.component.css']
})
export class ConstraintDetailComponent implements OnInit, OnDestroy {

  private paramMapSubscription: Subscription;
  model$: Observable<Model>;
  constraint$: Observable<Constraint>;

  constructor(
    private store$: Store<State>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.model$ = this.store$.select(selectModel);
    this.paramMapSubscription = this.route.paramMap.subscribe( 
      (params: ParamMap) => { 
        this.constraint$ = this.store$.select(selectConstraint, { id: +params.get('id')});
      });
  }

  ngOnDestroy() {
    this.paramMapSubscription.unsubscribe()
  }
}
