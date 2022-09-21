import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './components/containers/items/items.component';
import { SharedModule } from '@shared/shared.module';
import { AdditemsComponent } from './components/ui/additems/additems.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TransferorderComponent } from './components/containers/transferorder/transferorder.component';
import { TransferorderformComponent } from './components/ui/transferorderform/transferorderform.component';
import { WarehouseComponent } from './components/containers/warehouse/warehouse.component';
import { WarehouseformComponent } from './components/ui/warehouseform/warehouseform.component';
import { NotificationsService } from 'angular2-notifications';
import { OrganzationprofileComponent } from './components/ui/organzationprofile/organzationprofile.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoleComponent } from './components/containers/role/role.component';
import { TableModule } from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';

import { RoleformComponent } from './components/ui/roleform/roleform.component';
import { BranchformComponent } from './components/ui/branchform/branchform.component';
import { BranchComponent } from './components/containers/branch/branch.component';
@NgModule({
  declarations: [ItemsComponent,AdditemsComponent,WarehouseformComponent,
                 OrganzationprofileComponent, TransferorderComponent,
                 TransferorderformComponent,RoleformComponent ,RoleComponent,
                 WarehouseComponent,BranchComponent,BranchformComponent],
  imports: [
    CheckboxModule,
  CommonModule,
    ItemsRoutingModule,
    MatDialogModule,
    SharedModule,
    InputTextModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    CardModule,
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
export class ItemsModule { }
