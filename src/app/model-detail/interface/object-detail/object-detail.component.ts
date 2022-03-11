import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 

import { State } from 'src/app/root-store/root-store.state'
import { Model } from 'src/app/data-models/model';
import { InterfaceObject } from 'src/app/data-models/interface-object';
import { 
  selectModel,
  selectInterfaceObject, 
  selectObjectData } from 'src/app/root-store/root-store.selectors';
import { ObjDataRequestAction, 
         ObjDataClearAction
         } from 'src/app/root-store/root-store.actions';
import { InterfaceObjectEditComponent } from '../object-edit/object-edit.component';


@Component({ 
  selector: 'app-interace-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrls: ['./object-detail.component.css']
})
export class InterfaceObjectDetailComponent implements OnInit, OnDestroy {

  private paramMapSubscription: Subscription;
  private objSubscription: Subscription;
  private dataSubscription: Subscription;
  model$: Observable<Model>;
  object$: Observable<InterfaceObject>;
  data$: Observable<any>;
  data: any;

  constructor(
    private store$: Store<State>,
    private route: ActivatedRoute,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.model$ = this.store$.select(selectModel);
    this.paramMapSubscription = this.route.paramMap.subscribe( 
      (params: ParamMap) => { 
        this.object$ = this.store$.select(selectInterfaceObject, { id: +params.get('id')});
      });
    this.objSubscription = this.object$.subscribe( 
      (oo: InterfaceObject) => {
        if (oo.data) {
          this.store$.dispatch(new ObjDataRequestAction({ o: oo }));
        }
        else {
          this.store$.dispatch(new ObjDataClearAction({}));
        }
      });
    this.data$ = this.store$.select(selectObjectData);
    this.dataSubscription = this.data$.subscribe(
      (d: any) => {
        this.data = d;
      });
  }

  editData(o: InterfaceObject) {
    const modalRef = this.modalService.open(InterfaceObjectEditComponent);
    modalRef.componentInstance.obj = o;
    modalRef.componentInstance.objData = this.data;
  }

  ngOnDestroy() {
    this.paramMapSubscription.unsubscribe();
    this.objSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }
}
