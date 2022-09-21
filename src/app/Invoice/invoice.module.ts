import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InvoiceComponent } from './components/containers/invoice/invoice.component';
import { InvoiceRoutingModule } from './invoice.routing.module';
import { InvoiceformComponent } from './components/ui/invoiceform/invoiceform.component';
import { TableModule } from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
@NgModule({
  declarations: [InvoiceComponent,InvoiceformComponent],
  imports: [
  CommonModule,
    InvoiceRoutingModule,
    SharedModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    CardModule,
    ButtonModule,
    TableModule
  ]
})
export class InvoiceModule { }