import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from 'src/app/root-store/root-store.state';
import { Model } from 'src/app/data-models/model';
import { Solver } from 'src/app/data-models/solver';
import { selectSolver, selectModel } from 'src/app/root-store/root-store.selectors';


@Component({
  selector: 'app-solver-tab',
  templateUrl: './solver-tab.component.html',
  styleUrls: ['./solver-tab.component.css']
})
export class SolverTabComponent implements OnInit {

  model$: Observable<Model>;
  solver$: Observable<Solver>;

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.model$ = this.store$.select(selectModel);
    this.solver$ = this.store$.select(selectSolver);
  }
}
