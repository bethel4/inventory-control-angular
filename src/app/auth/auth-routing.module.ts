import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeformComponent } from './components/codeform/codeform.component';
import { ForgetpasswordformComponent } from './components/forgetpasswordform/forgetpasswordform.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordrestComponent } from './components/passwordrest/passwordrest.component';
import {RegisterComponent} from './components/register/register.component';
const routes: Routes = [
  { path: 'signup', component: RegisterComponent },
  {path:'login',component:LoginComponent} ,
  {path:'code',component:CodeformComponent} ,
  {path:'forgetpassword',component:ForgetpasswordformComponent} ,
  {path:'passwordrest',component:PasswordrestComponent} ,
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
