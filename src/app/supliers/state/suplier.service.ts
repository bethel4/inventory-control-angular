import { SuplierStore } from './suplier.stroe';
import { NotificationsService } from 'angular2-notifications';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { SuplierModel } from '../../supliers/model/suplier.model';

@Injectable({ providedIn: 'root' })
export class SuplierService {

  constructor(private itemStore: SuplierStore,
              private http: HttpClient,
              private notificationsService: NotificationsService) {

  }
  get(): Observable<any> {
    const url = `${environment.apiUrl}/item/get-items`;
    return this.http.get<SuplierModel[]>(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.itemStore.set(result.data);
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
  getById(id): Observable<any> {
    const url = `${environment.apiUrl}/item/get-item/${id}`;
    return this.http.get<SuplierModel[]>(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.itemStore.set(result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  add(suplierModel: SuplierModel): Observable<any> {
    debugger
    const url = `${environment.apiUrl}/item/insert-item`;
    return this.http.post(url, suplierModel)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.itemStore.add(result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
 
  update(id, data): Observable<any> {
    const url = `${environment.apiUrl}/item/patch-item/${id}`;
    return this.http.put(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.itemStore.update(result.data.id, result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  delete(id): Observable<any> {
    const url = `${environment.apiUrl}/item/remove-item/${id}`;
    return this.http.delete(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.itemStore.remove(result.data.id);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
}
