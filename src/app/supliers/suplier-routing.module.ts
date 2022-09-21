import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuplierComponent } from './components/containers/suplier/suplier.component';
import { SuplierformComponent } from './components/ui/suplierform/suplierform.component';
const routes: Routes = [
  {path:'',component:SuplierComponent},
  {path:'addsuplier',component:SuplierformComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports:[RouterModule]
})
export class SuplierRoutingModule { }
