import { InterfaceFile } from './interface-file';
import { InterfaceObject } from './interface-object';
import { HelperObject } from './helper-object';
import { Variable } from './variable';
import { Function } from './function';
import { Constraint } from './constraint';
import { Problem } from './problem';
import { Solver } from './solver';
import { User } from './user';


export interface Model {
    url: string;
    id: number;
    name: string;
    description: string;
    owner: User;
    system: string;
    status: string;
    source: string;
    time_created: string;
    time_start: string;
    time_end: string;
    execution_log: string;
    interface_files: InterfaceFile[];
    interface_objects: InterfaceObject[];
    helper_objects: HelperObject[];
    variables: Variable[];
    functions: Function[];
    constraints: Constraint[];
    problem: Problem;
    solver: Solver;
}