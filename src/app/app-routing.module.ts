import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelListComponent } from './model-list/model-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: 'signup', component:SignupComponent },
  { path: 'models', component:ModelListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
