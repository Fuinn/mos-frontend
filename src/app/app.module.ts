import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AgGridModule } from 'ag-grid-angular';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { AppRoutingModule } from './app-routing.module';
import { RootStoreModule } from './root-store/root-store.module'
import { ModelDetailModule } from './model-detail/model-detail.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ModelListComponent } from './model-list/model-list.component';
import { ModelUploadComponent } from './model-upload/model-upload.component';
import { NotificationComponent } from './notification/notification.component';

import { MathJaxModule } from 'ngx-mathjax';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from 'src/app/services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModelListComponent,
    ModelUploadComponent,
    NotificationComponent,
    LoginComponent,
    UserInfoComponent,
    SignupComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      'maxOpened': 1,
      'autoDismiss': true,
      'closeButton': true,
    }),
    HttpClientModule,
    AppRoutingModule,
    RootStoreModule,
    ModelDetailModule,
    MathJaxModule.forRoot({
      version: '2.7.5',
      config: 'TeX-AMS_HTML',
      hostname: 'cdnjs.cloudflare.com'
      }),
    NgxJsonViewerModule,
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: InterceptorService, 
      multi: true 
    }
  ],
  entryComponents:[
    UserInfoComponent,
    ModelUploadComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
