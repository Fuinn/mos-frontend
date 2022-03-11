import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';

import { Model } from 'src/app/data-models/model';
import { selectModel } from 'src/app/root-store/root-store.selectors';
import { State } from 'src/app/root-store/root-store.state';

@Component({
  selector: 'app-model-detail-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class ModelTitlebarComponent implements OnInit {

  model$: Observable<Model>;

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.model$ = this.store$.select(selectModel);
  }

}
