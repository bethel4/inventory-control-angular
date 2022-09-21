import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { SharedModule } from "@shared/shared.module";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { PanelMenuModule } from "primeng/panelmenu";
import { PurchasedetialComponent } from "./components/containers/purchasedetial/purchasedetial.component";
import { PurchaseorderComponent } from "./components/containers/purchaseorder/purchaseorder.component";
import { PurchaseorderformComponent } from "./components/ui/purchaseorderform/purchaseorderform.component";
import { PurchaseRoutingModule } from "./purchaseorder-routing.module";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { TableModule } from "primeng/table";
import {TabViewModule} from 'primeng/tabview';

@NgModule({
    declarations: [PurchasedetialComponent,PurchaseorderformComponent,PurchaseorderComponent],
    imports: [
  CommonModule,
      PurchaseRoutingModule,
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
      PanelMenuModule,
      TabViewModule
    ]
  })
  export class PurchaseModule { }
  