import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelDetailComponent } from './model-detail.component';
import { ModelMainComponent } from './main/main.component';
import { ModelSourceComponent } from './source/source.component';
import { ModelExecutionComponent } from './execution/execution.component';

import { ContextComponent } from './context/context.component';
import { HelperObjectListComponent } from './context/object-list/object-list.component';
import { HelperObjectDetailComponent } from './context/object-detail/object-detail.component';

import { InterfaceComponent } from './interface/interface.component';
import { InterfaceFileDetailComponent } from './interface/file-detail/file-detail.component';
import { InterfaceObjectDetailComponent } from './interface/object-detail/object-detail.component';

import { OptComponent } from './opt/opt.component';
import { VariableTabComponent } from './opt/variable-tab/variable-tab.component';
import { VariableListComponent } from './opt/variable-list/variable-list.component';
import { VariableDetailComponent } from './opt/variable-detail/variable-detail.component';
import { FunctionTabComponent } from './opt/function-tab/function-tab.component';
import { FunctionListComponent } from './opt/function-list/function-list.component';
import { FunctionDetailComponent } from './opt/function-detail/function-detail.component';
import { ConstraintTabComponent } from './opt/constraint-tab/constraint-tab.component';
import { ConstraintListComponent } from './opt/constraint-list/constraint-list.component';
import { ConstraintDetailComponent } from './opt/constraint-detail/constraint-detail.component';
import { ProblemTabComponent } from './opt/problem-tab/problem-tab.component';
import { SolverTabComponent } from './opt/solver-tab/solver-tab.component';


const routes: Routes = [
  { path: 'models/:id', component:ModelDetailComponent, children: [
    
    // Model
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: ModelMainComponent },
    { path: 'source', component: ModelSourceComponent },
      
    // Interface
    { path: 'interface/:type', component: InterfaceComponent }, 
    { path: 'interface/files/:id', component: InterfaceFileDetailComponent },
    { path: 'interface/objects/:id', component: InterfaceObjectDetailComponent },

    // Context
    { path: 'context/:type', component: ContextComponent, children: [
      { path: '', component: HelperObjectListComponent },
      { path: ':id', component: HelperObjectDetailComponent },
    ]},
  
    // Optimization
    { path: 'optimization', component: OptComponent, children: [
      { path: '', redirectTo: 'variables', pathMatch: 'full' },
      { path: 'variables', component: VariableTabComponent, children: [
        { path: '', component: VariableListComponent },
        { path: ':id', component: VariableDetailComponent },
        ]
      },
      { path: 'functions', component: FunctionTabComponent, children: [
        { path: '', component: FunctionListComponent },
        { path: ':id', component: FunctionDetailComponent },
        ]
      },
      { path: 'constraints', component: ConstraintTabComponent, children: [
        { path: '', component: ConstraintListComponent },
        { path: ':id', component: ConstraintDetailComponent },
        ]
      },
      { path: 'problem', component: ProblemTabComponent },
      { path: 'solver', component: SolverTabComponent },
      ]
    },

    // Execution
    { path: 'execution', component: ModelExecutionComponent },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelRoutingModule { }
