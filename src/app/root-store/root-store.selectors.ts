import { 
    createSelector, 
    MemoizedSelector,
    MemoizedSelectorWithProps,
} from '@ngrx/store';

import { AppState, State } from './root-store.state';
import { Model } from '../data-models/model';
import { HelperObject } from '../data-models/helper-object';
import { InterfaceFile } from '../data-models/interface-file';
import { InterfaceObject } from '../data-models/interface-object';
import { Variable } from '../data-models/variable';
import { VariableState } from '../data-models/variable-state';
import { Function } from '../data-models/function';
import { FunctionState } from '../data-models/function-state';
import { Constraint } from '../data-models/constraint';
import { ConstraintState } from '../data-models/constraint-state';
import { Problem } from '../data-models/problem';
import { ProblemState } from '../data-models/problem-state';;
import { Solver } from '../data-models/solver';
import { SolverState } from '../data-models/solver-state';
import { Token } from '../data-models/token';

export const selectRootState = (appState: AppState): State => appState.root;

export const selectError: MemoizedSelector<object, string> = createSelector(
    selectRootState,
    (state: State): string => state.error
)

export const selectLog: MemoizedSelector<object, string> = createSelector(
    selectRootState,
    (state: State): string => state.log
)

export const selectToken: MemoizedSelector<object, Token> = createSelector(
    selectRootState,
    (state: State): Token => state.token
)

// Model
//******

export const selectModels: MemoizedSelector<object, Model[]> = createSelector(
    selectRootState,
    (state: State): Model[] => state.models
);

export const selectModel: MemoizedSelector<object, Model> = createSelector(
    selectRootState,
    (state: State): Model => state.model
);

// Interface
//*********/

export const selectInterfaceFiles: MemoizedSelectorWithProps<object, { type: string }, InterfaceFile[]> = createSelector(
    selectModel,
    (m: Model, prop): InterfaceFile[] => 
        m.interface_files.filter( (f: InterfaceFile): boolean => (f.type == prop.type))
);

export const selectInterfaceObjects: MemoizedSelectorWithProps<object, { type: string }, InterfaceObject[]> = createSelector(
    selectModel,
    (m: Model, prop): InterfaceObject[] => 
        m.interface_objects.filter( (o: InterfaceObject): boolean => (o.type == prop.type))
);

export const selectInterfaceFile: MemoizedSelectorWithProps<object, { id: number }, InterfaceFile> = createSelector(
    selectModel,
    (m: Model, props): InterfaceFile => {
        for (let f of m.interface_files) {
            if (f.id == props.id)
                return f;
        }
        return null;
    }
);

export const selectInterfaceObject: MemoizedSelectorWithProps<object, { id: number }, InterfaceObject> = createSelector(
    selectModel,
    (m: Model, props): InterfaceObject => {
        for (let o of m.interface_objects) {
            if (o.id == props.id)
                return o;
        }
        return null;
    }
);

export const selectObjectData: MemoizedSelector<object, any> = createSelector(
    selectRootState,
    (state: State): any => state.object_data
)

// Context
//*******/

export const selectHelperObjects: MemoizedSelectorWithProps<object, { type: string }, HelperObject[]> = createSelector(
    selectModel,
    (m: Model, prop): HelperObject[] => 
        m.helper_objects.filter( (o: HelperObject): boolean => (o.type == prop.type))
);

export const selectHelperObject: MemoizedSelectorWithProps<object, { id: number }, HelperObject> = createSelector(
    selectModel,
    (m: Model, props): HelperObject => {
        for (let o of m.helper_objects) {
            if (o.id == props.id)
                return o;
        }
        return null;
    }
);

// Optimization
//************/

export const selectVariables: MemoizedSelector<object, Variable[]> = createSelector(
    selectModel,
    (m: Model): Variable[] => m.variables
);

export const selectVariable: MemoizedSelectorWithProps<object, { id: number }, Variable> = createSelector(
    selectModel,
    (m: Model, props): Variable => {
        for (let v of m.variables) {
            if (v.id == props.id)
                return v;
        }
        return null;
    }
);

export const selectFunctions: MemoizedSelector<object, Function[]> = createSelector(
    selectModel,
    (m: Model): Function[] => m.functions
);

export const selectFunction: MemoizedSelectorWithProps<object, { id: number }, Function> = createSelector(
    selectModel,
    (m: Model, props): Function => {
        for (let f of m.functions) {
            if (f.id == props.id)
                return f;
        }
        return null;
    }
);

export const selectConstraints: MemoizedSelector<object, Constraint[]> = createSelector(
    selectModel,
    (m: Model): Constraint[] => m.constraints
);

export const selectConstraint: MemoizedSelectorWithProps<object, { id: number }, Constraint> = createSelector(
    selectModel,
    (m: Model, props): Constraint => {
        for (let c of m.constraints) {
            if (c.id == props.id)
                return c;
        }
        return null;
    }
);

export const selectProblem: MemoizedSelector<object, Problem> = createSelector(
    selectModel,
    (m: Model): Problem => m.problem
)

export const selectSolver: MemoizedSelector<object, Solver> = createSelector(
    selectModel,
    (m: Model): Solver => m.solver
)

// Variable state
//***************/

export const selectVariableStates: MemoizedSelector<object, VariableState[]> = createSelector(
    selectRootState,
    (state: State): VariableState[] => state.variable_states
);

// Function state
//***************/

export const selectFunctionStates: MemoizedSelector<object, FunctionState[]> = createSelector(
    selectRootState,
    (state: State): FunctionState[] => state.function_states
);

// Constraint state
//*****************/

export const selectConstraintStates: MemoizedSelector<object, ConstraintState[]> = createSelector(
    selectRootState,
    (state: State): ConstraintState[] => state.constraint_states
);

// Solver state
//*************/

export const selectSolverState: MemoizedSelector<object, SolverState> = createSelector(
    selectRootState,
    (state: State): SolverState => state.solver_state
);

// Problem state
//**************/

export const selectProblemState: MemoizedSelector<object, ProblemState> = createSelector(
    selectRootState,
    (state: State): ProblemState => state.problem_state
);