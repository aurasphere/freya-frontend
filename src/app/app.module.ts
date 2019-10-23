import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ListComponent } from './list.component';
import { AppComponent } from './template/app.component';
import { DetailsComponent } from './details.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './misc/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    ListComponent,
	DetailsComponent,
	LoginComponent,
	AppComponent
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule,
	HttpClientModule,
    RouterModule.forRoot([
      { path: 'dettagli/:itemId', component: DetailsComponent},
      { path: 'login', component: LoginComponent },
	  { path: '', component: AppComponent}
    ])
  ],
  providers: [AuthService,
   {
     provide: HTTP_INTERCEPTORS,
     useClass: AuthInterceptor,
     multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
