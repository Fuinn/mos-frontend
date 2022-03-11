import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { State } from '../../../root-store/root-store.state'
import { selectVariableStates } from '../../../root-store/root-store.selectors';
import { Variable } from 'src/app/data-models/variable';
import { VariableState } from 'src/app/data-models/variable-state';
import { VarStateGetRequestAction } from '../../../root-store/root-store.actions';

@Component({
  selector: 'app-variable-state',
  templateUrl: './variable-state.component.html',
  styleUrls: ['./variable-state.component.css'] 
})
export class VariableStateComponent implements OnInit, OnDestroy {

  private varSubscription: Subscription;
  states$: Observable<VariableState[]>;
  columnDefs = [
    { field: 'index', sortable: true},
    { field: 'label', sortable: true, filter: true},
    { field: 'kind', sortable: true},
    { field: 'value', 
      sortable: true,
      valueFormatter: params => params.data.value.toExponential(5)},
    { field: 'lower_bound', 
      sortable: true,
      valueFormatter: params => params.data.lower_bound.toExponential(5)},
    { field: 'upper_bound', 
      sortable: true,
      valueFormatter: params => params.data.upper_bound.toExponential(5)},
  ]; 

  @Input() variable$: Observable<Variable>;

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.states$ = this.store$.select(selectVariableStates);
    this.varSubscription = this.variable$.subscribe(
      (v: Variable) => {
        this.store$.dispatch(new VarStateGetRequestAction({ variable: v }));
      });
  }

  onDataReady(params) {
    params.api.sizeColumnsToFit();
  }

  ngOnDestroy() {
    this.varSubscription.unsubscribe();
  }
}
