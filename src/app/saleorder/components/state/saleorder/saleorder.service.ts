import { SaleOrderStore } from './saleorder.store';
import { NotificationsService } from 'angular2-notifications';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { SaleOrderModel } from '../../../../saleorder/components/model/saleorder.model';

@Injectable({ providedIn: 'root' })
export class SaleOrdersService {

  constructor(private saleorderStore: SaleOrderStore,
              private http: HttpClient,
              private notificationsService: NotificationsService) {

  }
  get(): Observable<any> {
    const url = `${environment.apiUrl}sale-order/list-SO`;
    return this.http.get<SaleOrderModel[]>(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.saleorderStore.set(result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  add(data): Observable<any> {
    const url = `${environment.apiUrl}/sale-order/insert-SO`;
    return this.http.post(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.saleorderStore.add(result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  update(id, data): Observable<any> {
    const url = `${environment.apiUrl}/sale-order/update-SO/${id}`;
    return this.http.put(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.saleorderStore.update(result.data.id, result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  getById(id): Observable<any> {
    const url = `${environment.apiUrl}/sale-order/get-SO/${id}`;
    return this.http.get<SaleOrderModel[]>(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.saleorderStore.set(result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  
  delete(id): Observable<any> {
    const url = `${environment.apiUrl}/sale-order/remove-SO/${id}`;
    return this.http.delete(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.saleorderStore.remove(result.data.id);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
}
