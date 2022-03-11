import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store'; 

import { State } from 'src/app/root-store/root-store.state'
import { InterfaceObject } from 'src/app/data-models/interface-object'; 
import { IntObjUpdateRequestAction } from 'src/app/root-store/root-store.actions';


@Component({
  selector: 'app-interface-object-edit',
  templateUrl: './object-edit.component.html',
  styleUrls: ['./object-edit.component.css']
})
export class InterfaceObjectEditComponent implements OnInit {

  @Input() public obj: InterfaceObject;
  @Input() public objData: any;
  
  constructor(
    private store$: Store<State>,
    public activeModal: NgbActiveModal) { }

  ngOnInit(
  ) { }

  submit() {

    this.store$.dispatch(new IntObjUpdateRequestAction({ 
      o: this.obj, 
      data: JSON.parse(this.objData)
    }));
    this.activeModal.close()
  }

}
