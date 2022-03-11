import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { State } from 'src/app/root-store/root-store.state'
import { selectSolverState } from 'src/app/root-store/root-store.selectors';
import { Solver } from 'src/app/data-models/solver';
import { SolverState } from 'src/app/data-models/solver-state';
import { SolverStateGetRequestAction } from 'src/app/root-store/root-store.actions';


@Component({
  selector: 'app-solver-state',
  templateUrl: './solver-state.component.html',
  styleUrls: ['./solver-state.component.css']
})
export class SolverStateComponent implements OnInit, OnDestroy {

  private solverSubscription: Subscription;
  state$: Observable<SolverState>; 

  @Input() solver$: Observable<Solver>;
  
  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.state$ = this.store$.select(selectSolverState);
    this.solverSubscription = this.solver$.subscribe(
      (s: Solver) => {
        this.store$.dispatch(new SolverStateGetRequestAction({ solver: s }));
      });
  }

  ngOnDestroy() {
    this.solverSubscription.unsubscribe();
  }
}
