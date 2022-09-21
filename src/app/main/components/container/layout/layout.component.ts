import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../../state/menu.service';
import { Observable } from 'rxjs';
import { MenuQuery } from '../../../state/menu.query';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MenuItem, TreeNode } from 'primeng/api';
import { Chart, registerables } from 'chart.js';
import { SidebarComponent, MenuEventArgs } from '@syncfusion/ej2-angular-navigations';
import { SessionService } from 'src/app/auth/state/session.service';
import { SessionQuery } from 'src/app/auth/state/session.query';
@Component({
  selector: 'co-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidebarMenuInstance') sidebarMenuInstance: SidebarComponent;
  @BlockUI() blockUI: NgBlockUI;

  width = '220px';
  mediaQuery: string = ('(min-width: 600px)');
  target = '.main-content';
  dockSize = '50px';
  enableDock = true;
  username$: Observable<string> = this.query.select(state => state.user ? state.user.name : null);
  menu$: Observable<any[]> = this.menuQuery.selectMenuItems();
  chart :any
  title = 'Inventory Control Application';
  items: MenuItem[];
  nodes: TreeNode[];
  constructor(
    private service: SessionService,
    private menuService: MenuService,
    private query: SessionQuery,
    private menuQuery: MenuQuery,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  navs: MenuItem[];
  value3: string;
  activeItem: MenuItem;

  ngOnInit(): void {
    this.menuService.load()
    this.navs = [
      {
          label: 'Update',
          icon: 'pi pi-refresh'
      },
      {
          label: 'Delete',
          icon: 'pi pi-times'
      },
      {
          label: 'Angular Website',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
      },
      {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload'
      }
  ];
  this.nodes = [
    {
        key: '0',
        label: 'Introduction',
        children: [
            {key: '0-0', label: 'What is Angular', data:'https://angular.io', type: 'url'},
            {key: '0-1', label: 'Getting Started', data: 'https://angular.io/guide/setup-local', type: 'url'},
            {key: '0-2', label: 'Learn and Explore', data:'https://angular.io/guide/architecture', type: 'url'},
            {key: '0-3', label: 'Take a Look', data: 'https://angular.io/start', type: 'url'}
        ]
    },
    {
        key: '1',
        label: 'Components In-Depth',
        children: [
            {key: '1-0', label: 'Component Registration', data: 'https://angular.io/guide/component-interaction', type: 'url'},
            {key: '1-1', label: 'User Input', data: 'https://angular.io/guide/user-input', type: 'url'},
            {key: '1-2', label: 'Hooks', data: 'https://angular.io/guide/lifecycle-hooks', type: 'url'},
            {key: '1-3', label: 'Attribute Directives', data: 'https://angular.io/guide/attribute-directives', type: 'url'}
        ]
    }
];
    this.chart = new Chart ('myChart',{
      type:'line',
      data:{
        labels:['a','b','c','d','e','f','g','h'],
        datasets: [{
  
          label: 'Sale Order Summery',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    })
    this.activeItem = this.navs[0];
 
  }

  onToggle(): void {
    this.sidebarMenuInstance.toggle();
  }
  onLogout(): void {
    this.service.logout();
    this.router.navigate(['register/login']);
  }
  onSelect(event: MenuEventArgs): void{
    event.event.preventDefault();
    const item = event.item;
    if (item.url) {
      this.router.navigate([item.url], { relativeTo: this.route });
    }
  }
  
}