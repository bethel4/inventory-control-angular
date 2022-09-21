import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './components/containers/customers/customer.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CustomersRoutingModule } from '../customers/customer-routing.module';
import { CustomerformComponent } from './components/ui/customerform/customerform.component';

@NgModule({
  declarations: [CustomerComponent,CustomerformComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    InputTextModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    CardModule,
    ButtonModule
  ]
})
export class CustomersModule { }
