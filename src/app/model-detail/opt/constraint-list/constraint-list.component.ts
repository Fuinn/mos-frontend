import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../../root-store/root-store.state';
import { Constraint } from '../../../data-models/constraint';
import { selectConstraints } from '../../../root-store/root-store.selectors';


@Component({
  selector: 'app-opt-constraint-list',
  templateUrl: './constraint-list.component.html',
  styleUrls: ['./constraint-list.component.css']
})
export class ConstraintListComponent implements OnInit {

  constraints$: Observable<Constraint[]>;

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.constraints$ = this.store$.select(selectConstraints);
  }

}
