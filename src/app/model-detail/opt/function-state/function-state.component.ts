import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { State } from '../../../root-store/root-store.state'
import { selectFunctionStates } from '../../../root-store/root-store.selectors';
import { Function } from 'src/app/data-models/function';
import { FunctionState } from 'src/app/data-models/function-state';
import { FuncStateGetRequestAction } from '../../../root-store/root-store.actions';


@Component({
  selector: 'app-function-state',
  templateUrl: './function-state.component.html',
  styleUrls: ['./function-state.component.css']
})
export class FunctionStateComponent implements OnInit, OnDestroy {

  private funcSubscription: Subscription;
  states$: Observable<FunctionState[]>; 
  columnDefs = [
    { field: 'index', sortable: true},
    { field: 'label', sortable: true, filter: true},
    { field: 'value', 
      sortable: true,
      valueFormatter: params => params.data.value.toExponential(5)},
  ];

  @Input() function$: Observable<Function>;

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.states$ = this.store$.select(selectFunctionStates);
    this.funcSubscription = this.function$.subscribe(
      (f: Function) => {
        this.store$.dispatch(new FuncStateGetRequestAction({ function: f }));
      });
  }

  onDataReady(params) {
    params.api.sizeColumnsToFit();
  }

  ngOnDestroy() {
    this.funcSubscription.unsubscribe();
  }
}
