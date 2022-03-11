import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { State } from 'src/app/root-store/root-store.state'
import { selectProblemState } from 'src/app/root-store/root-store.selectors';
import { Problem } from 'src/app/data-models/problem';
import { ProblemState } from 'src/app/data-models/problem-state';
import { ProbStateGetRequestAction } from 'src/app/root-store/root-store.actions';


@Component({
  selector: 'app-problem-state',
  templateUrl: './problem-state.component.html',
  styleUrls: ['./problem-state.component.css']
})
export class ProblemStateComponent implements OnInit, OnDestroy {

  private objSubscription: Subscription;
  state$: Observable<ProblemState>; 

  @Input() problem$: Observable<Problem>;

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.state$ = this.store$.select(selectProblemState);
    this.objSubscription = this.problem$.subscribe(
      (p: Problem) => {
        this.store$.dispatch(new ProbStateGetRequestAction({ problem: p }));
      });
  }

  ngOnDestroy() {
    this.objSubscription.unsubscribe();
  }
}
