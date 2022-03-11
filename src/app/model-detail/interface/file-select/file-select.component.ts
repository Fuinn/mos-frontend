import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store'; 

import { State } from 'src/app/root-store/root-store.state'
import { InterfaceFile } from 'src/app/data-models/interface-file'; 
import { IntFileUpdateRequestAction } from 'src/app/root-store/root-store.actions';

@Component({
  selector: 'app-interface-file-select',
  templateUrl: './file-select.component.html',
  styleUrls: ['./file-select.component.css']
})
export class InterfaceFileSelectComponent implements OnInit {

  @Input() public file: InterfaceFile;

  filedata: File;
  
  selectForm = new FormGroup({
    filePath: new FormControl(''),
  });

  constructor(
    private store$: Store<State>,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {}

  changeFile(fileInput: any) {
    this.filedata = <File>fileInput.target.files[0];
  }

  submit() {
    this.store$.dispatch(new IntFileUpdateRequestAction({ 
      f: this.file, 
      file: this.filedata 
    }));
    this.activeModal.close(this.filedata)
  }
}
