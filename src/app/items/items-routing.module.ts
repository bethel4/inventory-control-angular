import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from '../items/components/containers/items/items.component';
import { AdditemsComponent } from './components/ui/additems/additems.component';
import { TransferorderComponent } from './components/containers/transferorder/transferorder.component';
import { TransferorderformComponent } from './components/ui/transferorderform/transferorderform.component';
import { WarehouseComponent } from './components/containers/warehouse/warehouse.component';
import { WarehouseformComponent } from './components/ui/warehouseform/warehouseform.component';
import { OrganzationprofileComponent } from './components/ui/organzationprofile/organzationprofile.component';
import { RoleformComponent } from './components/ui/roleform/roleform.component';
import { BranchComponent } from './components/containers/branch/branch.component';

const routes: Routes = [
  {path:'',component:ItemsComponent},
  {path:'addwarehouse',component:WarehouseComponent},
  {path:'additems',component:AdditemsComponent},
  {path:'addwarehouse',component:WarehouseformComponent},
  {path:'transferorders',component:TransferorderComponent},
  {path:'addtransferorder',component:TransferorderformComponent},
  {path:'orgnzation-profile',component:OrganzationprofileComponent},
  {path:'warehouse',component:WarehouseComponent},
  {path:'branch',component:BranchComponent},
  {path:'role',component:RoleformComponent},
  {path:'addrole',component:RoleformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports:[RouterModule]
})
export class ItemsRoutingModule { }
