import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { State } from 'src/app/root-store/root-store.state';
import { InterfaceFile } from 'src/app/data-models/interface-file';
import { selectInterfaceFiles } from 'src/app/root-store/root-store.selectors';
import { InterfaceObject } from 'src/app/data-models/interface-object';
import { selectInterfaceObjects } from 'src/app/root-store/root-store.selectors';


@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  files$: Observable<InterfaceFile[]>;
  objects$: Observable<InterfaceObject[]>;

  constructor(
    private store$: Store<State>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.files$ = this.store$.select(selectInterfaceFiles, { type: params.get('type') });
        this.objects$ = this.store$.select(selectInterfaceObjects, {type: params.get('type')});
      });
  }
}
