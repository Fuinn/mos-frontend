import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';

import { Model } from 'src/app/data-models/model';
import { selectModel } from 'src/app/root-store/root-store.selectors';
import { State } from 'src/app/root-store/root-store.state';

@Component({
  selector: 'app-model-execution',
  templateUrl: './execution.component.html',
  styleUrls: ['./execution.component.css']
})
export class ModelExecutionComponent implements OnInit {

  model$: Observable<Model>;

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.model$ = this.store$.select(selectModel);
  }

}
