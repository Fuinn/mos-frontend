import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';

import { Model } from 'src/app/data-models/model';
import { selectModel } from 'src/app/root-store/root-store.selectors';
import { State } from 'src/app/root-store/root-store.state';
import { ModelDeleteRequestAction, 
         ModelRunRequestAction } from 'src/app/root-store/root-store.actions';

@Component({
  selector: 'app-model-detail-actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.css']
})
export class ModelActionbarComponent implements OnInit {

  model$: Observable<Model>;

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.model$ = this.store$.select(selectModel);
  }

  deleteModel(m: Model) {
    this.store$.dispatch(new ModelDeleteRequestAction({ model: m }));
  }

  runModel(m: Model) {
    this.store$.dispatch(new ModelRunRequestAction({ model: m }));
  }

}
