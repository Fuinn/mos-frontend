import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../../root-store/root-store.state';
import { Variable } from '../../../data-models/variable';
import { selectVariables } from '../../../root-store/root-store.selectors';

@Component({
  selector: 'app-variable-list',
  templateUrl: './variable-list.component.html',
  styleUrls: ['./variable-list.component.css']
})
export class VariableListComponent implements OnInit {

  variables$: Observable<Variable[]>;

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.variables$ = this.store$.select(selectVariables);
  }

}
