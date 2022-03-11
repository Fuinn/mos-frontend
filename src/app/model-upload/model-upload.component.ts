import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from 'src/app/root-store/root-store.state';
import { 
  ModelUploadRequestAction, 
  ModelGetAllRequestAction } from 'src/app/root-store/root-store.actions';
import { selectLog } from 'src/app/root-store/root-store.selectors';

@Component({
  selector: 'app-model-upload',
  templateUrl: './model-upload.component.html',
  styleUrls: ['./model-upload.component.css']
})
export class ModelUploadComponent implements OnInit {

  filedata: File;
  log$: Observable<string>;

  uploadForm = new FormGroup({
    filePath: new FormControl(''),
  });

  constructor(
    private store$: Store<State>,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.log$ = this.store$.select(selectLog);
  }

  changeFile(fileInput: any) {
    this.filedata = <File>fileInput.target.files[0];
  }

  submit() {
    this.store$.dispatch(new ModelUploadRequestAction({ file: this.filedata }));
  }

  close() {
    this.store$.dispatch(new ModelGetAllRequestAction({}))
    this.activeModal.close('Close')
  }
}
