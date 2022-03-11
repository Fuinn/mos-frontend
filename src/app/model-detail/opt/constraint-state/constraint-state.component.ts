import { Component, OnInit, Input, OnDestroy  } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { State } from 'src/app/root-store/root-store.state'
import { selectConstraintStates } from 'src/app/root-store/root-store.selectors';
import { Constraint } from 'src/app/data-models/constraint';
import { ConstraintState } from 'src/app/data-models/constraint-state';
import { ConstrStateGetRequestAction } from 'src/app/root-store/root-store.actions';


@Component({ 
  selector: 'app-constraint-state',
  templateUrl: './constraint-state.component.html',
  styleUrls: ['./constraint-state.component.css']
})
export class ConstraintStateComponent implements OnInit, OnDestroy {

  private constrSubscription: Subscription;
  states$: Observable<ConstraintState[]>; 
  columnDefs = [
    { field: 'index', sortable: true},
    { field: 'label', sortable: true, filter: true},
    { field: 'kind', sortable: true},
    { field: 'violation', 
      sortable: true,
      valueFormatter: params => params.data.violation.toExponential(5)},
    { field: 'dual', 
      sortable: true,
      valueFormatter: params => params.data.dual.toExponential(5)},
  ];

  @Input() constraint$: Observable<Constraint>;

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.states$ = this.store$.select(selectConstraintStates);
    this.constrSubscription = this.constraint$.subscribe(
      (c: Constraint) => {
        this.store$.dispatch(new ConstrStateGetRequestAction({ constraint: c }));
      });
  }

  onDataReady(params) {
    params.api.sizeColumnsToFit();
  }

  ngOnDestroy() {
    this.constrSubscription.unsubscribe();
  }
}
