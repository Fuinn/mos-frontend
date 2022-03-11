import { Actions, ActionTypes } from './root-store.actions';
import { initialState, State } from './root-store.state';

export function rootStoreReducer(state: State = initialState, action: Actions): State {
    switch (action.type) {

        // Token clear
        //************
        case ActionTypes.TOKEN_CLEAR: {
            return {
                ...state,
                token: null,
            };
        }

        // Token get
        //**********
        case ActionTypes.TOKEN_GET_REQUEST: {
            return {
                ...state,
                token: null,
                error: null
            };
        }

        case ActionTypes.TOKEN_GET_SUCCESS: {
            return {
                ...state,
                token: action.payload,
            };
        }

        case ActionTypes.TOKEN_GET_FAILURE: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        // Model get all 
        //**************
        case ActionTypes.MODEL_GET_ALL_REQUEST: {
            return {
                ...state,
                models: [],
                model: null,
                variable_states: [],
                function_states: [],
                constraint_states: [],
                problem_state: null,
                solver_state: null,
                object_data: null,
                error: null
            };
        }

        case ActionTypes.MODEL_GET_ALL_SUCCESS: {
            return {
                ...state,
                models: action.payload.models,
            };
        }

        case ActionTypes.MODEL_GET_ALL_FAILURE: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        // Model get
        //**********
        case ActionTypes.MODEL_GET_REQUEST: {
            return {
                ...state,
                variable_states: [],
                function_states: [],
                constraint_states: [],
                problem_state: null,
                solver_state: null,
                object_data: null,
                error: null
            };
        }

        case ActionTypes.MODEL_GET_SUCCESS: {
            return {
                ...state,
                model: action.payload.model,
            };
        }

        case ActionTypes.MODEL_GET_FAILURE: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        // Model upload
        //*************
        case ActionTypes.MODEL_UPLOAD_REQUEST: {
            return {
                ...state,
                log: null,
                error: null
            };
        }

        case ActionTypes.MODEL_UPLOAD_SUCCESS: {
            return {
                ...state,
                log: action.payload.log,
            };
        }

        case ActionTypes.MODEL_UPLOAD_FAILURE: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        // Model delete
        //*************
        case ActionTypes.MODEL_DELETE_REQUEST: {
            return {
                ...state,
                error: null
            };
        }

        case ActionTypes.MODEL_DELETE_SUCCESS: {
            return state;
        }

        case ActionTypes.MODEL_DELETE_FAILURE: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        // Model run
        //***********
        case ActionTypes.MODEL_RUN_REQUEST: {
            return {
                ...state,
                error: null
            };
        }

        case ActionTypes.MODEL_RUN_SUCCESS: {
            return {
                ...state,
                model: action.payload.model,
                error: null
            };
        }

        case ActionTypes.MODEL_RUN_FAILURE: {
            return {
                ...state,
                error: action.payload.error
            };
        }
        
        // Interface file update
        //**********************
        case ActionTypes.INT_FILE_UPDATE_REQUEST: {
            return {
                ...state,
                error: null
            };
        }

        case ActionTypes.INT_FILE_UPDATE_SUCCESS: {
            return {
                ...state,
                model: {
                    ...state.model,
                    interface_files: state.model.interface_files.map(
                        (f) => f.id == action.payload.f.id ? action.payload.f : f 
                    )
                },
                error: null
            };
        }

        case ActionTypes.INT_FILE_UPDATE_FAILURE: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        // Interface object update
        //************************
        case ActionTypes.INT_OBJ_UPDATE_REQUEST: {
            return {
                ...state,
                error: null
            };
        }

        case ActionTypes.INT_OBJ_UPDATE_SUCCESS: {
            return {
                ...state,
                model: {
                    ...state.model,
                    interface_objects: state.model.interface_objects.map(
                        (o) => o.id == action.payload.o.id ? action.payload.o : o 
                    )
                },
                error: null
            };
        }

        case ActionTypes.INT_OBJ_UPDATE_FAILURE: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        // Interface/context object data
        //******************************
        case ActionTypes.OBJ_DATA_REQUEST: {
            return {
                ...state,
                object_data: null,
                error: null
            };
        }

        case ActionTypes.OBJ_DATA_SUCCESS: {
            return {
                ...state,
                object_data: action.payload.data,
                error: null
            };
        }

        case ActionTypes.OBJ_DATA_FAILURE: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        // Interface/context object clear
        //******************************
        case ActionTypes.OBJ_DATA_CLEAR: {
            return {
                ...state,
                object_data: null
            };
        }

        // Variable state get
        //********************
        case ActionTypes.VAR_STATE_GET_REQUEST: {
            return {
                ...state,
                error: null
            };
        }

        case ActionTypes.VAR_STATE_GET_SUCCESS: {
            return {
                ...state,
                variable_states: action.payload.states,
                error: null
            };
        }

        case ActionTypes.VAR_STATE_GET_FAILURE: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        // Function state get
        //*******************
        case ActionTypes.FUNC_STATE_GET_REQUEST: {
            return {
                ...state,
                error: null
            };
        }

        case ActionTypes.FUNC_STATE_GET_SUCCESS: {
            return {
                ...state,
                function_states: action.payload.states,
                error: null
            };
        }

        case ActionTypes.FUNC_STATE_GET_FAILURE: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        // Constraint state get
        //*********************
        case ActionTypes.CONSTR_STATE_GET_REQUEST: {
            return {
                ...state,
                error: null
            };
        }

        case ActionTypes.CONSTR_STATE_GET_SUCCESS: {
            return {
                ...state,
                constraint_states: action.payload.states,
                error: null
            };
        }

        case ActionTypes.CONSTR_STATE_GET_FAILURE: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        // Problem state get
        //******************
        case ActionTypes.PROB_STATE_GET_REQUEST: {
            return {
                ...state,
                error: null
            };
        }

        case ActionTypes.PROB_STATE_GET_SUCCESS: {
            return {
                ...state,
                problem_state: action.payload.state,
                error: null
            };
        }

        case ActionTypes.PROB_STATE_GET_FAILURE: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        // Solver state get
        //*****************
        case ActionTypes.SOLVER_STATE_GET_REQUEST: {
            return {
                ...state,
                error: null
            };
        }

        case ActionTypes.SOLVER_STATE_GET_SUCCESS: {
            return {
                ...state,
                solver_state: action.payload.state,
                error: null
            };
        }

        case ActionTypes.SOLVER_STATE_GET_FAILURE: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        // Default
        default: {
            return state;
        }
    }
}