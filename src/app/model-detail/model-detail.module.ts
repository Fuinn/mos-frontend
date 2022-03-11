import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { MathJaxModule } from 'ngx-mathjax';

import { ModelRoutingModule } from './model-routing.module';

import { ModelDetailComponent } from './model-detail.component';
import { ModelTitlebarComponent } from './titlebar/titlebar.component';
import { ModelActionbarComponent } from './actionbar/actionbar.component';
import { ModelSourceComponent } from './source/source.component';
import { ModelSidebarComponent } from './sidebar/sidebar.component';
import { ModelMainComponent } from './main/main.component';
import { ModelExecutionComponent } from './execution/execution.component';

import { ContextComponent } from './context/context.component';
import { HelperObjectListComponent } from './context/object-list/object-list.component';
import { HelperObjectDetailComponent } from './context/object-detail/object-detail.component';

import { InterfaceComponent } from './interface/interface.component';
import { InterfaceFileDetailComponent } from './interface/file-detail/file-detail.component';
import { InterfaceFileSelectComponent } from './interface/file-select/file-select.component';
import { InterfaceObjectDetailComponent } from './interface/object-detail/object-detail.component';
import { InterfaceObjectEditComponent } from './interface/object-edit/object-edit.component';

import { OptComponent } from './opt/opt.component';
import { VariableTabComponent } from './opt/variable-tab/variable-tab.component';
import { VariableListComponent } from './opt/variable-list/variable-list.component';
import { VariableDetailComponent } from './opt/variable-detail/variable-detail.component';
import { VariableStateComponent } from './opt/variable-state/variable-state.component';
import { FunctionTabComponent } from './opt/function-tab/function-tab.component';
import { FunctionListComponent } from './opt/function-list/function-list.component';
import { FunctionDetailComponent } from './opt/function-detail/function-detail.component';
import { FunctionStateComponent } from './opt/function-state/function-state.component';
import { ConstraintTabComponent } from './opt/constraint-tab/constraint-tab.component';
import { ConstraintListComponent } from './opt/constraint-list/constraint-list.component';
import { ConstraintDetailComponent } from './opt/constraint-detail/constraint-detail.component';
import { ConstraintStateComponent } from './opt/constraint-state/constraint-state.component';
import { ProblemTabComponent } from './opt/problem-tab/problem-tab.component';
import { ProblemStateComponent } from './opt/problem-state/problem-state.component';
import { SolverTabComponent } from './opt/solver-tab/solver-tab.component';
import { SolverStateComponent } from './opt/solver-state/solver-state.component';

@NgModule({
  declarations: [
    ModelDetailComponent,
    ModelSidebarComponent,
    ModelMainComponent,
    ModelTitlebarComponent,
    ModelActionbarComponent,
    ModelSourceComponent,
    ModelExecutionComponent,
    ContextComponent,
    HelperObjectListComponent,
    HelperObjectDetailComponent,
    InterfaceComponent,
    InterfaceFileDetailComponent,
    InterfaceFileSelectComponent,
    InterfaceObjectDetailComponent,
    InterfaceObjectEditComponent,
    OptComponent,
    VariableTabComponent,
    VariableListComponent,
    VariableDetailComponent,
    VariableStateComponent,
    FunctionTabComponent,
    FunctionListComponent,
    FunctionDetailComponent,
    FunctionStateComponent,
    ConstraintTabComponent,
    ConstraintListComponent,
    ConstraintDetailComponent,
    ConstraintStateComponent,
    ProblemTabComponent,
    ProblemStateComponent,
    SolverTabComponent,
    SolverStateComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ModelRoutingModule,
    MathJaxModule.forChild(),
    AgGridModule.withComponents([]),
    NgxJsonViewerModule,
  ],
  providers: [],
  entryComponents:[
    InterfaceFileSelectComponent,
    InterfaceObjectEditComponent,
  ],
})
export class ModelDetailModule { }
