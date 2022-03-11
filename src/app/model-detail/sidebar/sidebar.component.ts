import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';

import { Model } from 'src/app/data-models/model';
import { State } from 'src/app/root-store/root-store.state';
import { selectModel } from 'src/app/root-store/root-store.selectors';

@Component({
  selector: 'app-model-detail-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class ModelSidebarComponent implements OnInit {

  model$: Observable<Model>;

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.model$ = this.store$.select(selectModel);
  }
}
