import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaledetialComponent } from './components/containers/saleorderdetial/saledetial.component';
import { SaleorderComponent } from './components/containers/saleorder/saleorder.component';
import { SaleorderformComponent } from './components/ui/saleorderform/saleorderform.component';
const routes: Routes = [
  {path:'',component:SaleorderComponent},
  {path:'saleorder-detail',component:SaledetialComponent},
  {path:'addsale',component:SaleorderformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class SaleRoutingModule { }
