import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './components/container/layout/layout.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {TreeModule} from 'primeng/tree';
import { SidebarModule , MenuModule,} from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [LayoutComponent, FooterComponent, HeaderComponent],
  imports: [

  MatListModule,
    CommonModule,
    MainRoutingModule,
    OverlayPanelModule,
    SidebarModule,
    MenuModule,
    ButtonModule,
    PanelMenuModule,
    MatSidenavModule,
    MatIconModule,
    SplitButtonModule,
    TreeModule,
    ToolbarModule,
    MenuModule,
    CardModule,
    OverlayPanelModule,
    TableModule,
    ToastModule,
    TabMenuModule,
    MatSidenavModule 
  ],
})
export class MainModule {}
