import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './components/containers/customers/customer.component';
import { CustomerformComponent } from './components/ui/customerform/customerform.component';
const routes: Routes = [
  {path:'',component:CustomerComponent},
  {path:'addcustomer',component:CustomerformComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CustomersRoutingModule { }
