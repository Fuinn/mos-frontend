import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { State } from 'src/app/root-store/root-store.state';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.css']
})
export class ContextComponent implements OnInit {

  type: string;

  constructor(
    private store$: Store<State>,
    private route: ActivatedRoute) { }

  ngOnInit() { 
    this.route.paramMap.subscribe( 
      (params: ParamMap) => { 
        this.type = params.get('type');
      });
  }
}
