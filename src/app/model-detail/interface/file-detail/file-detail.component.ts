import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { saveAs } from 'file-saver';

import { State } from 'src/app/root-store/root-store.state'
import { Model } from 'src/app/data-models/model';
import { InterfaceFile } from 'src/app/data-models/interface-file';
import { selectModel, selectInterfaceFile } from 'src/app/root-store/root-store.selectors';
import { InterfaceFileSelectComponent } from '../file-select/file-select.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-interface-file-detail',
  templateUrl: './file-detail.component.html',
  styleUrls: ['./file-detail.component.css']
})
export class InterfaceFileDetailComponent implements OnInit, OnDestroy {

  private paramMapSubscription: Subscription; 
  model$: Observable<Model>;
  file$: Observable<InterfaceFile>;
  filedata: File = null;

  constructor(
    private store$: Store<State>,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private apiService: ApiService) { }

  ngOnInit() {
    this.model$ = this.store$.select(selectModel);
    this.paramMapSubscription = this.route.paramMap.subscribe( 
      (params: ParamMap) => { 
        this.file$ = this.store$.select(selectInterfaceFile, { id: +params.get('id')});
      });
  }

  uploadFile(f: InterfaceFile) {
    const modalRef = this.modalService.open(InterfaceFileSelectComponent);
    modalRef.componentInstance.file = f;
  }

  downloadFile(f: InterfaceFile) {
    this.apiService.intFileDownload(f).subscribe(response => {
			let blob:any = new Blob([response], { type: 'application/octet-stream' });
			const url = window.URL.createObjectURL(blob);
      saveAs(blob, f.filename);
    }, 
    _error => console.log('Error downloading file'),
    () => console.info('File downloaded successfully'));
  }

  ngOnDestroy() {
    this.paramMapSubscription.unsubscribe()
  }
}
