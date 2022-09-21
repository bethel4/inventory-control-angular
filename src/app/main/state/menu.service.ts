import { MenuStore } from './menu.store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private items: MenuItem[];
  constructor(
    private store: MenuStore,
    private http: HttpClient,
    private notifier: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
 
  load(): any {
    const items = [
      {
        id:1,
          label: 'Dashboard',
          //icon:'pi pi-fw pi-file',
          routerLink:['/main'],
          command: (event) => {
            
            this.onSelect(event)
        },
      },
        {
          id:2,
            label: 'Items',
            icon:'pi pi-fw pi-file',
            routerLink:['./items'],
            command: (event) => {
              
              this.onSelect(event)
          },
          items:[
            {
              label:'Item catagory',
              icon:'pi pi-fw pi-plus' },
              {label:'open',icon:'pi pi-fw pi-user-plus'},

          ]
          },
          {
            id:3,
          label: 'Purchase Order',
          //icon:'pi pi-fw pi-pencil',
          routerLink:['./purchaseorder'],
          command: (event) => {
            
            this.onSelect(event)
        }
          },
          {
            id:4,
          label: 'Customer',
          icon:'pi pi-fw pi-user',
          routerLink:['./customers'],
          command: (event) => {
            
            this.onSelect(event)
        }
          },
         
          {
            id:6,
          label: 'Bill',
          icon:'pi pi-fw pi-calendar',
          },
          {
            id:7,
          label: 'Sale Order',
          icon:'pi pi-fw pi-pencil',
          routerLink:['./saleorder'],
          command: (event) => {
            
            this.onSelect(event)
        }
      }
      
  
  ]

    // const url = `${environment.apiUrl}/core/menus`;
    // return this.http.get<any[]>(url).pipe(
    //   retry(3),
    //   tap(
    //     (result: any) => {
    //       if (result.success) {
            this.store.set(items);
            
          // } else {
          //   this.notifier.add({
          //     severity: 'error',
          //     summary: 'Error',
          //     detail: result.error,
          //   });
         // }
          //this.store.setLoading(false);
    //     },
    //     (error) => {
    //       this.notifier.add({
    //         severity: 'error',
    //         summary: 'Error',
    //         detail: error.message,
    //       });
    //       this.store.setLoading(false);
    //     }
    //   )
    // );
  }
 onSelect(event): void {
  console.log(event)
   event.event.preventDefault();
    const item = event.item;
    
    if (item.routerLink) {
      this.router.navigate([item.routerLink], { relativeTo: this.route });
    }
  }

  setLoading(loading: boolean): void {
    return this.store.setLoading(loading);
  }
}
