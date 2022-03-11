
export interface ConstraintState {
    url: string;
    id: number;
    index: number[] | null;
    label: string;
    kind: string;
    violation: number;
    dual: number;
}