import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DebugComponent } from './components/debug/debug.component';

const routes: Routes = [
  { path:  'login', component:  LoginComponent},
  { path:  'register', component:  RegisterComponent},
  { path: 'debug', component: DebugComponent},
  { path:  '', redirectTo:  'login', pathMatch:  'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
