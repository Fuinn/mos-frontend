import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mapTo, switchMap } from 'rxjs/operators'; 
import { ToastrService } from 'ngx-toastr';

import { Model } from '../data-models/model';
import { VariableState } from '../data-models/variable-state';
import { FunctionState } from '../data-models/function-state';
import { ConstraintState } from '../data-models/constraint-state';
import { ProblemState } from '../data-models/problem-state';
import { SolverState } from '../data-models/solver-state';

import { ApiService } from '../services/api.service';
import * as RSA from './root-store.actions';
import { InterfaceFile } from '../data-models/interface-file';
import { InterfaceObject } from '../data-models/interface-object';
import { Token } from '../data-models/token';


@Injectable()
export class RootStoreEffects {

    constructor(
        private apiService: ApiService,
        private actions$: Actions,
        private toastService: ToastrService,
    ) { }

    @Effect()
    tokenGetRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<RSA.TokenGetRequestAction>(RSA.ActionTypes.TOKEN_GET_REQUEST),
        switchMap(
            action => this.apiService.tokenGet(
                action.payload.username,
                action.payload.password).pipe(
                    map((d: Token) => new RSA.TokenGetSuccessAction(d)),
                    catchError(error => {
                        this.toastService.error('Authentication Failed!', 'Login');
                        return of(new RSA.TokenGetFailureAction({ error }));
                    })
            )
        )
    );

    @Effect()
    modelGetAllRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<RSA.ModelGetAllRequestAction>(RSA.ActionTypes.MODEL_GET_ALL_REQUEST),
        switchMap(
            action => this.apiService.modelGetAll().pipe(
                map((m: Model[]) => new RSA.ModelGetAllSuccessAction({ models: m })),
                catchError(error => of(new RSA.ModelGetAllFailureAction({ error })))
            )
        )
    );

    @Effect()
    modelGetRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<RSA.ModelGetRequestAction>(RSA.ActionTypes.MODEL_GET_REQUEST),
        switchMap(
            action => this.apiService.modelGet(action.payload.id).pipe(
                map((m: Model) => new RSA.ModelGetSuccessAction({ model: m })),
                catchError(error => of(new RSA.ModelGetFailureAction({ error })))
            )
        )
    );

    @Effect()
    modelUploadRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<RSA.ModelUploadRequestAction>(RSA.ActionTypes.MODEL_UPLOAD_REQUEST),
        switchMap(
            action => this.apiService.modelUpload(action.payload.file).pipe(
                map((d: { model: Model, log: string }) => new RSA.ModelUploadSuccessAction({ model: d.model, log: d.log })),
                catchError(error => of(new RSA.ModelUploadFailureAction({ error })))
            )
        )
    );

    @Effect()
    modelDeleteRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<RSA.ModelDeleteRequestAction>(RSA.ActionTypes.MODEL_DELETE_REQUEST),
        switchMap(
            action => this.apiService.modelDelete(action.payload.model).pipe(
                map(() => new RSA.ModelDeleteSuccessAction({})),
                catchError(error => of(new RSA.ModelDeleteFailureAction({ error })))
            )
        )
    );
    
    @Effect()
    modelRunRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<RSA.ModelRunRequestAction>(RSA.ActionTypes.MODEL_RUN_REQUEST),
        switchMap(
            action => this.apiService.modelRun(action.payload.model).pipe(
                map((m: Model) => new RSA.ModelRunSuccessAction({ model: m})),
                catchError(error => of(new RSA.ModelRunFailureAction({ error })))
            )
        )
    );
    
    @Effect()
    intFileUpdateRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<RSA.IntFileUpdateRequestAction>(RSA.ActionTypes.INT_FILE_UPDATE_REQUEST),
        switchMap(
            action => this.apiService.intFileUpdate(
                action.payload.f,
                action.payload.file).pipe(
                map((ff: InterfaceFile) => {
                    this.toastService.success('Done!', 'File Update')
                    return new RSA.IntFileUpdateSuccessAction({ f: ff })
                }),
                catchError(error => of(new RSA.IntFileUpdateFailureAction({ error })))
            )
        )
    );

    @Effect()
    intObjUpdateRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<RSA.IntObjUpdateRequestAction>(RSA.ActionTypes.INT_OBJ_UPDATE_REQUEST),
        switchMap(
            action => this.apiService.intObjUpdate(
                action.payload.o,
                action.payload.data).pipe(
                map((oo: InterfaceObject) => {
                    this.toastService.success('Done!', 'Object Update')
                    return new RSA.IntObjUpdateSuccessAction({ o: oo })
                }),
                catchError(error => of(new RSA.IntObjUpdateFailureAction({ error })))
            )
        )
    );

    @Effect()
    objDataRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<RSA.ObjDataRequestAction>(RSA.ActionTypes.OBJ_DATA_REQUEST),
        switchMap(
            action => this.apiService.objDataGet(action.payload.o).pipe(
                map((d: any) => new RSA.ObjDataSuccessAction({ data: d })),
                catchError(error => of(new RSA.ObjDataFailureAction({ error })))
            )
        )
    ); 

    @Effect()
    varStateGetRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<RSA.VarStateGetRequestAction>(RSA.ActionTypes.VAR_STATE_GET_REQUEST),
        switchMap(
            action => this.apiService.varStateGet(action.payload.variable).pipe(
                map((s: VariableState[]) => new RSA.VarStateGetSuccessAction({ states: s })),
                catchError(error => of(new RSA.VarStateGetFailureAction({ error })))
            )
        )
    );

    @Effect()
    funcStateGetRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<RSA.FuncStateGetRequestAction>(RSA.ActionTypes.FUNC_STATE_GET_REQUEST),
        switchMap(
            action => this.apiService.funcStateGet(action.payload.function).pipe(
                map((s: FunctionState[]) => new RSA.FuncStateGetSuccessAction({ states: s })),
                catchError(error => of(new RSA.FuncStateGetFailureAction({ error })))
            )
        )
    );

    @Effect()
    constrStateGetRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<RSA.ConstrStateGetRequestAction>(RSA.ActionTypes.CONSTR_STATE_GET_REQUEST),
        switchMap(
            action => this.apiService.constrStateGet(action.payload.constraint).pipe(
                map((s: ConstraintState[]) => new RSA.ConstrStateGetSuccessAction({ states: s })),
                catchError(error => of(new RSA.ConstrStateGetFailureAction({ error })))
            )
        )
    );

    @Effect()
    solverStateGetRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<RSA.SolverStateGetRequestAction>(RSA.ActionTypes.SOLVER_STATE_GET_REQUEST),
        switchMap(
            action => this.apiService.solverStateGet(action.payload.solver).pipe(
                map((s: SolverState[]) => new RSA.SolverStateGetSuccessAction({ state: s[0] })),
                catchError(error => of(new RSA.SolverStateGetFailureAction({ error })))
            )
        )
    );

    @Effect()
    probStateGetRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<RSA.ProbStateGetRequestAction>(RSA.ActionTypes.PROB_STATE_GET_REQUEST),
        switchMap(
            action => this.apiService.probStateGet(action.payload.problem).pipe(
                map((s: ProblemState[]) => new RSA.ProbStateGetSuccessAction({ state: s[0] })),
                catchError(error => of(new RSA.ProbStateGetFailureAction({ error })))
            )
        )
    );
}