import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { State } from 'src/app/root-store/root-store.state';
import { HelperObject } from 'src/app/data-models/helper-object';
import { selectHelperObjects } from 'src/app/root-store/root-store.selectors';

@Component({
  selector: 'app-helper-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.css']
})
export class HelperObjectListComponent implements OnInit {

  objects$: Observable<HelperObject[]>;

  constructor(
    private store$: Store<State>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.paramMap.subscribe( 
      (params: ParamMap) => { 
        this.objects$ = this.store$.select(selectHelperObjects, {type: params.get('type')});
      });
  }
}
