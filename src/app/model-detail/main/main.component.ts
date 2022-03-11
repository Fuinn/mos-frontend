import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';

import { Model } from 'src/app/data-models/model';
import { selectModel } from 'src/app/root-store/root-store.selectors';
import { State } from 'src/app/root-store/root-store.state';

@Component({
  selector: 'app-model-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class ModelMainComponent implements OnInit {

  model$: Observable<Model>;

  constructor(
    private store$: Store<State>) {}

  ngOnInit() {
    this.model$ = this.store$.select(selectModel);
  }
}
