import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatListModule, MatSidenavModule, MatToolbarModule , MatExpansionModule, MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NodesListComponent } from './pages/nodes/nodes-list.component';
import { AddNodeComponent } from './pages/nodes/add-node.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './misc/auth.interceptor';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    DashboardComponent,
    AddNodeComponent,
    NodesListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    FontAwesomeModule,
    MatExpansionModule,
    MatTableModule,
    RouterModule.forRoot([
      //{ path: 'dettagli/:itemId', component: DetailsComponent},
      { path: "login", component: LoginComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "nodes/add", component: AddNodeComponent },
      { path: "nodes", component: NodesListComponent },
      { path: "**", redirectTo: "dashboard" }
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
