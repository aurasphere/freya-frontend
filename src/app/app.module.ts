import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatListModule, MatSidenavModule, MatToolbarModule , MatExpansionModule, MatTableModule, MatButtonModule } from '@angular/material';

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
import { NodeDetailsComponent } from './pages/nodes/node-details.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    DashboardComponent,
    AddNodeComponent,
    NodesListComponent,
    NodeDetailsComponent
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
    MatButtonModule,
    RouterModule.forRoot([
      //{ path: 'dettagli/:itemId', component: DetailsComponent},
      { path: "login", component: LoginComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: DashboardComponent },

      { path: "nodes", component: NodesListComponent },
      { path: "nodes/add", component: AddNodeComponent },
      { path: "nodes/edit", component: NodesListComponent },
      { path: "nodes/:id", component: NodeDetailsComponent },
      { path: "nodes/:id/logs", component: NodeDetailsComponent },
      { path: "nodes/:id/monitoring", component: NodeDetailsComponent },

      { path: "applications", component: NodesListComponent },
      { path: "applications/add", component: NodesListComponent },
      { path: "applications/edit", component: NodesListComponent },
      { path: "applications/:id", component: NodeDetailsComponent },
      { path: "applications/:id/logs", component: NodeDetailsComponent },
      { path: "applications/:id/monitoring", component: NodeDetailsComponent },
      
      { path: "datacenters", component: NodesListComponent },
      { path: "datacenters/add", component: NodeDetailsComponent },
      { path: "datacenters/edit", component: NodeDetailsComponent },
      { path: "datacenters/:id", component: NodeDetailsComponent },

      // TODO: page not found component or not?
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
