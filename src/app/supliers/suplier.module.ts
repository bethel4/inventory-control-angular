import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { NotificationsService } from 'angular2-notifications';
import { TableModule } from 'primeng/table';
import { SuplierComponent } from './components/containers/suplier/suplier.component';
import { SuplierformComponent } from './components/ui/suplierform/suplierform.component';
import { SuplierRoutingModule } from './suplier-routing.module';

@NgModule({
  declarations: [SuplierComponent,SuplierformComponent],
  imports: [
    CheckboxModule,
  CommonModule,
    MatDialogModule,
    SharedModule,
    InputTextModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    CardModule,
    SuplierRoutingModule,
    TableModule,
    ButtonModule,
  ],
  providers:[NotificationsService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ]
})
export class SuplierModule { }
