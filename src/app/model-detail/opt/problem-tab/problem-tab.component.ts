import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from 'src/app/root-store/root-store.state';
import { Model } from 'src/app/data-models/model';
import { Problem } from 'src/app/data-models/problem';
import { selectProblem, selectModel } from 'src/app/root-store/root-store.selectors';

@Component({
  selector: 'app-problem-tab',
  templateUrl: './problem-tab.component.html',
  styleUrls: ['./problem-tab.component.css']
})
export class ProblemTabComponent implements OnInit {

  model$: Observable<Model>;
  problem$: Observable<Problem>;

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.model$ = this.store$.select(selectModel);
    this.problem$ = this.store$.select(selectProblem);
  }

}
