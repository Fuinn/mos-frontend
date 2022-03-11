import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../../root-store/root-store.state';
import { Function } from '../../../data-models/function';
import { selectFunctions } from '../../../root-store/root-store.selectors';


@Component({
  selector: 'app-function-list',
  templateUrl: './function-list.component.html',
  styleUrls: ['./function-list.component.css']
})
export class FunctionListComponent implements OnInit {

  functions$: Observable<Function[]>;

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.functions$ = this.store$.select(selectFunctions);
  }

}
