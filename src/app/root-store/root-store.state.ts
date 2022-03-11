import { Model } from '../data-models/model';
import { VariableState } from '../data-models/variable-state';
import { FunctionState } from '../data-models/function-state';
import { ConstraintState } from '../data-models/constraint-state';
import { ProblemState } from '../data-models/problem-state';
import { SolverState } from '../data-models/solver-state';
import { Token } from '../data-models/token';


export interface AppState {
    root: State;
}

export interface State {
    token: Token | null;
    models: Model[];
    model: Model | null;
    variable_states: VariableState[];
    function_states: FunctionState[];
    constraint_states: ConstraintState[];
    problem_state: ProblemState | null;
    solver_state: SolverState | null;
    object_data: any;
    log: string | null;
    error: string | null;
}

export const initialState: State = {
    token: null,
    models: [],
    model: null,
    variable_states: [],
    function_states: [],
    constraint_states: [],
    problem_state: null,
    solver_state: null,
    object_data: null,
    log: null,
    error: null
};