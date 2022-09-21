import { QueryEntity } from '@datorama/akita';
import { MenuState, MenuStore } from './menu.store';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Menu } from '../models/menu.model';
import { MenuItem } from 'primeng/api';
import { state } from '@angular/animations';

@Injectable({ providedIn: 'root' })
export class MenuQuery extends QueryEntity<MenuState> {
  constructor(protected store: MenuStore) {
    super(store);
  }

  transformMenu(menus: MenuItem[] | undefined) {
    const i= [];
    console.log(menus)
    if (menus && menus.length > 0) {
      menus.forEach((menu) => {
        const m = {};
        m['label'] = menu.label;
        m['icon'] = menu.icon;
        m['routerLink'] =  menu.routerLink,
        m['command']=menu.command
        if (menu.items && menu.items.length > 0) {
          const children = [];
          
          menu.items.forEach((child: MenuItem) => {
            children.push({
              label: child.label,
              icon: child.icon,
              routerLink: child.routerLink,
              command:child.command
            });
          });
          m['items'] = children;
        }
        
        i.push(m);
      });
    }
    
    return i;
  }

  selectMenuItems(): any {
    
    console.log()
    return this.selectAll().pipe(
      map((items: any) => this.transformMenu(items))
    );
  }
}
