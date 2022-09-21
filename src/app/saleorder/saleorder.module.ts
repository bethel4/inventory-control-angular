import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '@shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { SaleorderComponent } from './components/containers/saleorder/saleorder.component';
import { SaleRoutingModule } from './saleorder-routing.module';
import {TableModule} from 'primeng/table';
import { SaledetialComponent } from './components/containers/saleorderdetial/saledetial.component';
import { SaleorderformComponent } from './components/ui/saleorderform/saleorderform.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabViewModule } from 'primeng/tabview';
import {NgxPrintModule} from 'ngx-print';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [SaleorderComponent,SaledetialComponent,SaleorderformComponent],
  imports: [
    CommonModule,
    MenubarModule,
    SaleRoutingModule,
    SharedModule,
     MatTabsModule,
     InputTextModule,
      FormsModule,
      MatSidenavModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      MatInputModule,
      MatIconModule,
      CardModule,
      ButtonModule,
      TableModule,
      NgxPrintModule,
      PanelMenuModule,
      TabViewModule
  ]
})
export class SaleModule { }
