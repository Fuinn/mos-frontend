import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { State } from '../root-store/root-store.state';
import { ModelGetRequestAction } from '../root-store/root-store.actions';

@Component({
  selector: 'app-model-detail',
  templateUrl: './model-detail.component.html',
  styleUrls: ['./model-detail.component.css']
})
export class ModelDetailComponent implements OnInit {

  constructor(
    private store$: Store<State>,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe( 
      (params: ParamMap) =>
        this.store$.dispatch(new ModelGetRequestAction(
          { id: +params.get('id') })));
  }
}
