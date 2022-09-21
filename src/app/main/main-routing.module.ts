import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/services/auth-guard';
import { LayoutComponent } from './components/container/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    //canActivate: [AuthGuard],
    children: [
       {path: '',loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule)},
       {path: 'items',loadChildren: () => import('../items/items.module').then((m) => m.ItemsModule)},
       {path:'customers',loadChildren:()=>import('../customers/customers.module').then((m)=>m.CustomersModule)},
       {path:'purchaseorder',loadChildren:()=>import('../purchaseorder/purchaseorder.module').then((m)=>m.PurchaseModule)},
       {path:'saleorder',loadChildren:()=>import('../saleorder/saleorder.module').then((m)=>m.SaleModule)},
      {path:'suplier',loadChildren:()=>import('../supliers/suplier.module').then((m)=>m.SuplierModule)},
      {path:'invoice',loadChildren:()=>import('../Invoice/invoice.module').then((m)=>m.InvoiceModule)}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class MainRoutingModule {}
