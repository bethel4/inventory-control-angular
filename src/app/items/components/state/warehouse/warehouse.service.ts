import { WarehouseStore } from './warehouse.store';
import { NotificationsService } from 'angular2-notifications';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { WarehouseModel } from '../../model/warehouse.model';

@Injectable({ providedIn: 'root' })
export class WarehouseService {

  constructor(private warehouseStore: WarehouseStore,
              private http: HttpClient,
              private notificationsService: NotificationsService) {

  }
  get(): Observable<any> {
    const url = `${environment.apiUrl}/warehouse/get-warehouse`;
    return this.http.get<WarehouseModel[]>(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.warehouseStore.set(result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  getById(id): Observable<any> {
    const url = `${environment.apiUrl}/warehouse/patch-warehouse/${id}`;
    return this.http.get<WarehouseModel[]>(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.warehouseStore.set(result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  add(data): Observable<any> {
    debugger
    const url = `${environment.apiUrl}/warehouse/insert-warehouse`;
    return this.http.post(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.warehouseStore.add(result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  update(id, data): Observable<any> {
    const url = `${environment.apiUrl}/warehouse/patch-warehouse/${id}`;
    return this.http.put(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.warehouseStore.update(result.data.id, result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }

  delete(id): Observable<any> {
    const url = `${environment.apiUrl}/warehouse/remove-item/${id}`;
    return this.http.delete(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.warehouseStore.remove(result.data.id);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
}
