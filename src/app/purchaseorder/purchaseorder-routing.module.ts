import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchasedetialComponent } from './components/containers/purchasedetial/purchasedetial.component';
import { PurchaseorderComponent } from './components/containers/purchaseorder/purchaseorder.component';
import { PurchaseorderformComponent } from './components/ui/purchaseorderform/purchaseorderform.component';
const routes: Routes = [
  {path:'',component:PurchaseorderComponent},
  {path:'purchaseorder-detail',component:PurchasedetialComponent},
  {path:'addpurchase',component:PurchaseorderformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PurchaseRoutingModule { }
