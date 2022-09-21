import { PurchaseOrderStore } from './purchaseorder.store';
import { NotificationsService } from 'angular2-notifications';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { PurchaseOrderModel } from '../../../../purchaseorder/components/model/purchaseorder.model';

@Injectable({ providedIn: 'root' })
export class PurchaseOrdersService {

  constructor(private purchaseStore: PurchaseOrderStore,
              private http: HttpClient,
              private notificationsService: NotificationsService) {

  }
  get(): Observable<any> {
    const url = `${environment.apiUrl}/purchase-order/list-PO`;
    return this.http.get<PurchaseOrderModel[]>(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.purchaseStore.set(result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  add(data): Observable<any> {
    const url = `${environment.apiUrl}/purchase-order/insert-PO`;
    return this.http.post(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.purchaseStore.add(result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  update(id, data): Observable<any> {
    const url = `${environment.apiUrl}/purchase-order/update-PO/${id}`;
    return this.http.put(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.purchaseStore.update(result.data.id, result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  getById(id): Observable<any> {
    const url = `${environment.apiUrl}/purchase-order/get-PO/${id}`;
    return this.http.get<PurchaseOrderModel[]>(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.purchaseStore.set(result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  
  delete(id): Observable<any> {
    const url = `${environment.apiUrl}/purchase-order/remove-PO/${id}`;
    return this.http.delete(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.purchaseStore.remove(result.data.id);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
}
