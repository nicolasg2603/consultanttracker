import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  
  {path: "log-in/", component: LogInComponent}
];


export const AppRoutingModule = RouterModule.forRoot(routes);
