import { Action } from '@ngrx/store';

import { Model } from '../data-models/model';
import { InterfaceFile } from '../data-models/interface-file';
import { InterfaceObject } from '../data-models/interface-object';
import { HelperObject } from '../data-models/helper-object';
import { Variable } from '../data-models/variable';
import { VariableState } from '../data-models/variable-state';
import { Function } from '../data-models/function';
import { FunctionState } from '../data-models/function-state';
import { Constraint } from '../data-models/constraint';
import { ConstraintState } from '../data-models/constraint-state';
import { Problem } from '../data-models/problem';
import { ProblemState } from '../data-models/problem-state';
import { Solver } from '../data-models/solver';
import { SolverState } from '../data-models/solver-state';
import { Token } from '../data-models/token';

export interface ActionBase extends Action {
    payload: any;
}

export enum ActionTypes {

    TOKEN_CLEAR = '[Token] Token clear',

    TOKEN_GET_REQUEST = '[Token] Get request',
    TOKEN_GET_SUCCESS = '[Token] Get success',
    TOKEN_GET_FAILURE = '[Token] Get failure',

    MODEL_GET_ALL_REQUEST = '[Model] Get all request',
    MODEL_GET_ALL_SUCCESS = '[Model] Get all success',
    MODEL_GET_ALL_FAILURE = '[Model] Get all failure',

    MODEL_GET_REQUEST = '[Model] Get request',
    MODEL_GET_SUCCESS = '[Model] Get success',
    MODEL_GET_FAILURE = '[Model] Get failure',
    
    MODEL_UPLOAD_REQUEST = '[Model] Upload request',
    MODEL_UPLOAD_SUCCESS = '[Model] Upload success',
    MODEL_UPLOAD_FAILURE = '[Model] Upload failure',

    MODEL_DELETE_REQUEST = '[Model] Delete request',
    MODEL_DELETE_SUCCESS = '[Model] Delete success',
    MODEL_DELETE_FAILURE = '[Model] Delete failure',

    MODEL_RUN_REQUEST = '[Model] Run request',
    MODEL_RUN_SUCCESS = '[Model] Run success',
    MODEL_RUN_FAILURE = '[Model] Run failure',

    INT_FILE_UPDATE_REQUEST = '[IntFile] Update request',
    INT_FILE_UPDATE_SUCCESS = '[IntFile] Update success',
    INT_FILE_UPDATE_FAILURE = '[IntFile] Update failure',

    INT_OBJ_UPDATE_REQUEST = '[IntObj] Update request',
    INT_OBJ_UPDATE_SUCCESS = '[IntObj] Update success',
    INT_OBJ_UPDATE_FAILURE = '[IntObj] Update failure',

    OBJ_DATA_REQUEST = '[Obj] Data request',
    OBJ_DATA_SUCCESS = '[Obj] Data success',
    OBJ_DATA_FAILURE = '[Obj] Data failure',

    OBJ_DATA_CLEAR = '[Obj] Data clear',

    VAR_STATE_GET_REQUEST = '[VarState] Get request',
    VAR_STATE_GET_SUCCESS = '[VarState] Get success',
    VAR_STATE_GET_FAILURE = '[VarState] Get failure',

    FUNC_STATE_GET_REQUEST = '[FuncState] Get request',
    FUNC_STATE_GET_SUCCESS = '[FuncState] Get success',
    FUNC_STATE_GET_FAILURE = '[FuncState] Get failure',

    CONSTR_STATE_GET_REQUEST = '[ConstrState] Get request',
    CONSTR_STATE_GET_SUCCESS = '[ConstrState] Get success',
    CONSTR_STATE_GET_FAILURE = '[COnstrState] Get failure',

    PROB_STATE_GET_REQUEST = '[ProbState] Get request',
    PROB_STATE_GET_SUCCESS = '[ProbState] Get success',
    PROB_STATE_GET_FAILURE = '[ProbState] Get failure',

    SOLVER_STATE_GET_REQUEST = '[SolverState] Get request',
    SOLVER_STATE_GET_SUCCESS = '[SolverState] Get success',
    SOLVER_STATE_GET_FAILURE = '[SolverState] Get failure',
}

// Token get
//**********
export class TokenGetRequestAction implements ActionBase {
    readonly type = ActionTypes.TOKEN_GET_REQUEST;
    constructor(public payload: { username: string, password: string }) {
    }
}

export class TokenGetSuccessAction implements ActionBase {
    readonly type = ActionTypes.TOKEN_GET_SUCCESS;
    constructor(public payload: Token ) {
    }
}

export class TokenGetFailureAction implements ActionBase {
    readonly type = ActionTypes.TOKEN_GET_FAILURE;
    constructor(public payload: { error: string }) {
    }
}

// Token clear
//************
export class TokenClearAction implements ActionBase {
    readonly type = ActionTypes.TOKEN_CLEAR;
    constructor(public payload: {}) {
    }
}

// Model get all
//**************
export class ModelGetAllRequestAction implements ActionBase {
    readonly type = ActionTypes.MODEL_GET_ALL_REQUEST;
    constructor(public payload: {}) {
    }
}

export class ModelGetAllSuccessAction implements ActionBase {
    readonly type = ActionTypes.MODEL_GET_ALL_SUCCESS;
    constructor(public payload: { models: Model[] }) {
    }
}

export class ModelGetAllFailureAction implements ActionBase {
    readonly type = ActionTypes.MODEL_GET_ALL_FAILURE;
    constructor(public payload: { error: string }) {
    }
}

// Model get
//**********
export class ModelGetRequestAction implements ActionBase {
    readonly type = ActionTypes.MODEL_GET_REQUEST;
    constructor(public payload: { id: number }) {
    }
}

export class ModelGetSuccessAction implements ActionBase {
    readonly type = ActionTypes.MODEL_GET_SUCCESS;
    constructor(public payload: { model: Model }) {
    }
}

export class ModelGetFailureAction implements ActionBase {
    readonly type = ActionTypes.MODEL_GET_FAILURE;
    constructor(public payload: { error: string }) {
    }
}

// Model upload
//*************
export class ModelUploadRequestAction implements ActionBase {
    readonly type = ActionTypes.MODEL_UPLOAD_REQUEST;
    constructor(public payload: { file: File }) {
    }
}

export class ModelUploadSuccessAction implements ActionBase {
    readonly type = ActionTypes.MODEL_UPLOAD_SUCCESS;
    constructor(public payload: { model: Model, log: string }) {
    }
}

export class ModelUploadFailureAction implements ActionBase {
    readonly type = ActionTypes.MODEL_UPLOAD_FAILURE;
    constructor(public payload: { error: string }) {
    }
}

// Model delete
//*************
export class ModelDeleteRequestAction implements ActionBase {
    readonly type = ActionTypes.MODEL_DELETE_REQUEST;
    constructor(public payload: { model: Model }) {
    }
}

export class ModelDeleteSuccessAction implements ActionBase {
    readonly type = ActionTypes.MODEL_DELETE_SUCCESS;
    constructor(public payload: {}) {
    }
}

export class ModelDeleteFailureAction implements ActionBase {
    readonly type = ActionTypes.MODEL_DELETE_FAILURE;
    constructor(public payload: { error: string }) {
    }
}

// Model run
//**********
export class ModelRunRequestAction implements ActionBase {
    readonly type = ActionTypes.MODEL_RUN_REQUEST;
    constructor(public payload: { model: Model }) {
    }
}

export class ModelRunSuccessAction implements ActionBase {
    readonly type = ActionTypes.MODEL_RUN_SUCCESS;
    constructor(public payload: { model: Model }) {
    }
}

export class ModelRunFailureAction implements ActionBase {
    readonly type = ActionTypes.MODEL_RUN_FAILURE;
    constructor(public payload: { error: string }) {
    }
}

// Interface file update
//**********************
export class IntFileUpdateRequestAction implements ActionBase {
    readonly type = ActionTypes.INT_FILE_UPDATE_REQUEST;
    constructor(public payload: { f: InterfaceFile, file: File }) {
    }
}

export class IntFileUpdateSuccessAction implements ActionBase {
    readonly type = ActionTypes.INT_FILE_UPDATE_SUCCESS;
    constructor(public payload: { f: InterfaceFile }) {
    }
}

export class IntFileUpdateFailureAction implements ActionBase {
    readonly type = ActionTypes.INT_FILE_UPDATE_FAILURE;
    constructor(public payload: { error: string }) {
    }
}

// Interface object update
//************************
export class IntObjUpdateRequestAction implements ActionBase {
    readonly type = ActionTypes.INT_OBJ_UPDATE_REQUEST;
    constructor(public payload: { o: InterfaceObject, data: any }) {
    }
}

export class IntObjUpdateSuccessAction implements ActionBase {
    readonly type = ActionTypes.INT_OBJ_UPDATE_SUCCESS;
    constructor(public payload: { o: InterfaceObject }) {
    }
}

export class IntObjUpdateFailureAction implements ActionBase {
    readonly type = ActionTypes.INT_OBJ_UPDATE_FAILURE;
    constructor(public payload: { error: string }) {
    }
}

// Interface/context object data
//******************************
export class ObjDataRequestAction implements ActionBase {
    readonly type = ActionTypes.OBJ_DATA_REQUEST;
    constructor(public payload: { o: InterfaceObject | HelperObject }) {
    }
}

export class ObjDataSuccessAction implements ActionBase {
    readonly type = ActionTypes.OBJ_DATA_SUCCESS;
    constructor(public payload: { data: any }) {
    }
}

export class ObjDataFailureAction implements ActionBase {
    readonly type = ActionTypes.OBJ_DATA_FAILURE;
    constructor(public payload: { error: string }) {
    }
}

// Interface/context object data clear
//************************************
export class ObjDataClearAction implements ActionBase {
    readonly type = ActionTypes.OBJ_DATA_CLEAR;
    constructor(public payload: {}) {
    }
}

// Variable state get 
//*******************
export class VarStateGetRequestAction implements ActionBase {
    readonly type = ActionTypes.VAR_STATE_GET_REQUEST;
    constructor(public payload: { variable: Variable }) {
    }
}

export class VarStateGetSuccessAction implements ActionBase {
    readonly type = ActionTypes.VAR_STATE_GET_SUCCESS;
    constructor(public payload: { states: VariableState[] }) {
    }
}

export class VarStateGetFailureAction implements ActionBase {
    readonly type = ActionTypes.VAR_STATE_GET_FAILURE;
    constructor(public payload: { error: string }) {
    }
}

// Function state get 
//*******************
export class FuncStateGetRequestAction implements ActionBase {
    readonly type = ActionTypes.FUNC_STATE_GET_REQUEST;
    constructor(public payload: { function: Function }) {
    }
}

export class FuncStateGetSuccessAction implements ActionBase {
    readonly type = ActionTypes.FUNC_STATE_GET_SUCCESS;
    constructor(public payload: { states: FunctionState[] }) {
    }
}

export class FuncStateGetFailureAction implements ActionBase {
    readonly type = ActionTypes.FUNC_STATE_GET_FAILURE;
    constructor(public payload: { error: string }) {
    }
}

// Constraint state get 
//*********************
export class ConstrStateGetRequestAction implements ActionBase {
    readonly type = ActionTypes.CONSTR_STATE_GET_REQUEST;
    constructor(public payload: { constraint: Constraint }) {
    }
}

export class ConstrStateGetSuccessAction implements ActionBase {
    readonly type = ActionTypes.CONSTR_STATE_GET_SUCCESS;
    constructor(public payload: { states: ConstraintState[] }) {
    }
}

export class ConstrStateGetFailureAction implements ActionBase {
    readonly type = ActionTypes.CONSTR_STATE_GET_FAILURE;
    constructor(public payload: { error: string }) {
    }
}

// Problem state get 
//******************
export class ProbStateGetRequestAction implements ActionBase {
    readonly type = ActionTypes.PROB_STATE_GET_REQUEST;
    constructor(public payload: { problem: Problem }) {
    }
}

export class ProbStateGetSuccessAction implements ActionBase {
    readonly type = ActionTypes.PROB_STATE_GET_SUCCESS;
    constructor(public payload: { state: ProblemState }) {
    }
}

export class ProbStateGetFailureAction implements ActionBase {
    readonly type = ActionTypes.PROB_STATE_GET_FAILURE;
    constructor(public payload: { error: string }) {
    }
}

// Solver state get 
//******************
export class SolverStateGetRequestAction implements ActionBase {
    readonly type = ActionTypes.SOLVER_STATE_GET_REQUEST;
    constructor(public payload: { solver: Solver }) {
    }
}

export class SolverStateGetSuccessAction implements ActionBase {
    readonly type = ActionTypes.SOLVER_STATE_GET_SUCCESS;
    constructor(public payload: { state: SolverState }) {
    }
}

export class SolverStateGetFailureAction implements ActionBase {
    readonly type = ActionTypes.SOLVER_STATE_GET_FAILURE;
    constructor(public payload: { error: string }) {
    }
}

export type Actions =

    TokenClearAction |

    TokenGetRequestAction |
    TokenGetSuccessAction |
    TokenGetFailureAction |
    
    ModelGetAllRequestAction |
    ModelGetAllSuccessAction |
    ModelGetAllFailureAction |
    
    ModelGetRequestAction |
    ModelGetSuccessAction |
    ModelGetFailureAction |
    
    ModelUploadRequestAction |
    ModelUploadSuccessAction |
    ModelUploadFailureAction |
    
    ModelDeleteRequestAction |
    ModelDeleteSuccessAction |
    ModelDeleteFailureAction |

    ModelRunRequestAction |
    ModelRunSuccessAction |
    ModelRunFailureAction |

    IntFileUpdateRequestAction |
    IntFileUpdateSuccessAction |
    IntFileUpdateFailureAction |

    IntObjUpdateRequestAction |
    IntObjUpdateSuccessAction |
    IntObjUpdateFailureAction |

    ObjDataRequestAction |
    ObjDataSuccessAction |
    ObjDataFailureAction |

    ObjDataClearAction |

    VarStateGetRequestAction |
    VarStateGetSuccessAction |
    VarStateGetFailureAction |

    FuncStateGetRequestAction |
    FuncStateGetSuccessAction |
    FuncStateGetFailureAction |

    ConstrStateGetRequestAction |
    ConstrStateGetSuccessAction |
    ConstrStateGetFailureAction |

    SolverStateGetRequestAction |
    SolverStateGetSuccessAction |
    SolverStateGetFailureAction |

    ProbStateGetRequestAction |
    ProbStateGetSuccessAction |
    ProbStateGetFailureAction;