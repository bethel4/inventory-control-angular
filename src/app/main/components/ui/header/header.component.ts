import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SessionQuery } from 'src/app/auth/state/session.query';
import { SessionService } from '../../../../auth/state/session.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { MenuQuery } from 'src/app/main/state/menu.query';
import { MenuService } from 'src/app/main/state/menu.service';

@Component({
  selector: 'co-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() username: string;
  visibleSidebar2;
  show :boolean = false
  @Output() toggle = new EventEmitter<void>();
  @Output() logout = new EventEmitter<boolean>();
  menu$: Observable<any[]> = this.menuQuery.selectMenuItems();
  constructor(private query:SessionQuery,
              private menuQuery: MenuQuery,
             private service:SessionService,
             private menuService: MenuService,
             private router:Router) {}

  ngOnInit(): void {}

//   onLogout(){
//  const token =  {token: this.query.accessToken}
//    this.service.logout(token).subscribe()
// //this.router.navigate(['./auth/login'])
//   }
onLogout(val: boolean = true): void {
  this.logout.emit(val);
}
  onToggle(): void {
    this.toggle.emit();
  }
  onSelect(event): void {
    this.menuService.onSelect(event)
    }

    ontoggle(){
      this.show = true
    }
}
