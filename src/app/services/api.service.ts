import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
import { SignUpData } from '../data-models/signup';

import { environment as env} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BACKEND_URL = `${env.protocol}://${env.backend_host}:${env.backend_port}`;
  API_URL: string = `${this.BACKEND_URL}/api`;

  constructor(private httpClient: HttpClient) { }

  tokenGet(usr: string, pwd: string): Observable<Token> {
    console.log('API: tokenGet');
    return this.httpClient.post<Token>(`${this.API_URL}/authenticate/`,
                                       { username: usr,
                                         password: pwd});
  }

  signupRequest(sd: SignUpData): Observable<any> {
    console.log('API: signupRequest');
    return this.httpClient.post(`${this.API_URL}/signup/`, sd);
  }

  modelGetAll(): Observable<Model[]> {
    console.log('API: modelGetAll');
    return this.httpClient.get<Model[]>(`${this.API_URL}/model/`);
  }

  modelGet(id: number): Observable<Model> {
    console.log('API: modelGet');
    return this.httpClient.get<Model>(`${this.API_URL}/model/${id}/`);
  }

  modelUpload(source_file: File): Observable<{ model: Model, log: string }> {
    console.log('API: modelUpload');
    const formData = new FormData();
    formData.append('source_file', source_file);
    return this.httpClient.post<{ model: Model, log: string }>(
      `${this.API_URL}/model/create_from_file/`, formData);
  }

  modelDelete(m: Model): Observable<Model> {
    console.log('API: modelDelete');
    return this.httpClient.delete<Model>(`${this.API_URL}/model/${m.id}/`);
  }

  modelRun(m: Model): Observable<Model> {
    console.log('API: modelRun');
    return this.httpClient.post<Model>(`${m.url}run/`, {});
  }

  modelWrite(m: Model): Observable<string> {
    console.log('API: modelWrite');
    return this.httpClient.get<string>(`${m.url}write/`);
  }

  intFileUpdate(f: InterfaceFile, file: File): Observable<InterfaceFile> {
    console.log('API: intFileUpdate');
    const formData = new FormData();
    if (file) {
      formData.append('data_file', file);
    }
    return this.httpClient.put<InterfaceFile>(`${f.url}`, formData);
  }

  intFileDownload(f: InterfaceFile): Observable<any> {
    console.log('API: intFileDownload');
    return this.httpClient.get(
      `${f.data}`,
      {responseType: 'blob'}
    );
  }

  intObjUpdate(o: InterfaceObject, data: any): Observable<InterfaceObject> {
    console.log('API: intObjUpdate');
    var oo = JSON.parse(JSON.stringify(o));
    oo['data'] = data;
    return this.httpClient.put<InterfaceObject>(`${o.url}`, oo);
  }

  objDataGet(o: InterfaceObject | HelperObject ): Observable<any> {
    console.log('API: objDataGet');
    return this.httpClient.get<any>(`${o.data}`);
  }

  varStateGet(v: Variable): Observable<VariableState[]> {
    console.log('API: varStateGet');
    return this.httpClient.get<VariableState[]>(`${v.states}`);
  }

  funcStateGet(f: Function): Observable<FunctionState[]> {
    console.log('API: funcStateGet');
    return this.httpClient.get<FunctionState[]>(`${f.states}`);
  }

  constrStateGet(c: Constraint): Observable<ConstraintState[]> {
    console.log('API: constrStateGet');
    return this.httpClient.get<ConstraintState[]>(`${c.states}`);
  }

  solverStateGet(s: Solver): Observable<SolverState[]> {
    console.log('API: solverStateGet');
    return this.httpClient.get<SolverState[]>(`${s.state}`);
  }

  probStateGet(p: Problem): Observable<ProblemState[]> {
    console.log('API: probStateGet');
    return this.httpClient.get<ProblemState[]>(`${p.state}`);
  }
}
