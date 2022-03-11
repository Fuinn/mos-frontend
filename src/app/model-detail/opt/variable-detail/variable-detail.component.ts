import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { State } from 'src/app/root-store/root-store.state'
import { Model } from 'src/app/data-models/model';
import { Variable } from 'src/app/data-models/variable';
import { selectVariable, selectModel } from 'src/app/root-store/root-store.selectors';


@Component({
  selector: 'app-variable-detail',
  templateUrl: './variable-detail.component.html',
  styleUrls: ['./variable-detail.component.css']
})
export class VariableDetailComponent implements OnInit, OnDestroy {

  private paramMapSubscription: Subscription;
  model$: Observable<Model>;
  variable$: Observable<Variable>;

  constructor(
    private store$: Store<State>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.model$ = this.store$.select(selectModel);
    this.paramMapSubscription = this.route.paramMap.subscribe( 
      (params: ParamMap) => { 
        this.variable$ = this.store$.select(selectVariable, { id: +params.get('id')});
      });
  }

  ngOnDestroy() {
    this.paramMapSubscription.unsubscribe()
  }
}
