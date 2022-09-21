import { OrganzationStore } from './organzation.stroe';
import { NotificationsService } from 'angular2-notifications';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { ItemModel } from '../../model/item.model';

@Injectable({ providedIn: 'root' })
export class Organzation {

  constructor(private orgnzatioStore: OrganzationStore,
              private http: HttpClient,
              private notificationsService: NotificationsService) {

  }
  get(): Observable<any> {
    const url = `${environment.apiUrl}/`;
    return this.http.get<ItemModel[]>(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.orgnzatioStore.set(result.data);
          } else {
            console.log('error')
          }
          },
     //  error => {
        //   this.notificationsService.error('Error occurred', error.message);
        // }
        )
      );
  }
  update(data): Observable<any> {
    debugger
    const url = `${environment.apiUrl}/organization/patch-organization`;
    return this.http.patch(url, data)
      .pipe(
        tap(()=>{
            this.orgnzatioStore.add(data)
        }
      )
      )
  }
  
  delate(id, data): Observable<any> {
    const url = `${environment.apiUrl}/organization/remove-organization`;
    return this.http.patch(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.orgnzatioStore.update(result.data.id, result.data);
          } else {
            console.log('error')
          }
        }, 
        )
      );
  }
}
