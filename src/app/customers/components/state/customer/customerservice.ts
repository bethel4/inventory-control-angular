import { CustomerStore } from './customer.store';
import { NotificationsService } from 'angular2-notifications';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { CusotmerModel } from '../../model/customer';

@Injectable({ providedIn: 'root' })
export class CustomerService {

  constructor(private customerStore: CustomerStore,
              private http: HttpClient,
              private notificationsService: NotificationsService) {

  }
  get(): Observable<any> {
    const url = `${environment.apiUrl}/get-customers`;
    return this.http.get<CusotmerModel[]>(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.customerStore.set(result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  getById(id): Observable<any> {
    const url = `${environment.apiUrl}/get-customers/${id}`;
    return this.http.get<CusotmerModel[]>(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.customerStore.set(result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  add(customerModel: CusotmerModel): Observable<any> {
    debugger
    const url = `${environment.apiUrl}/customer/insert-customer`;
    return this.http.post(url, customerModel)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.customerStore.add(result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
 
  update(id, data): Observable<any> {
    const url = `${environment.apiUrl}/patch-customer/${id}`;
    return this.http.put(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.customerStore.update(result.data.id, result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  delete(id): Observable<any> {
    const url = `${environment.apiUrl}/remove-customer/${id}`;
    return this.http.delete(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.customerStore.remove(result.data.id);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
}
