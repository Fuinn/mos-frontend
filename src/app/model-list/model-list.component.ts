import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { Model } from '../data-models/model';
import { State } from '../root-store/root-store.state';
import { selectToken,
         selectModels } from '../root-store/root-store.selectors';
import { ModelUploadComponent } from '../model-upload/model-upload.component';
import { 
  ModelGetAllRequestAction, 
} from '../root-store/root-store.actions';
import { Token } from '../data-models/token';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {

  token$: Observable<Token>;
  models$: Observable<Model[]>;

  constructor(
    private store$: Store<State>,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit() {
    this.models$ = this.store$.select(selectModels);
    this.token$ = this.store$.select(selectToken);
    this.token$.subscribe( 
      (token: Token) => {
        if (!token) {
          this.router.navigate(['/login']);
        }
        else {
          this.store$.dispatch(new ModelGetAllRequestAction({}));
        }
      }
    );
  }

  uploadModel() {
    this.modalService.open(ModelUploadComponent);
  }
}
