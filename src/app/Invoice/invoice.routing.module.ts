import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './components/containers/invoice/invoice.component';
import { InvoiceformComponent } from './components/ui/invoiceform/invoiceform.component';

const routes: Routes = [
  {path:'',component:InvoiceComponent},
  {path:'addinvoice',component:InvoiceformComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class InvoiceRoutingModule { }
