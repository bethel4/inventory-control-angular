import { InvoiceStore } from './invoice.store';
import { NotificationsService } from 'angular2-notifications';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InvoiceService {

  constructor(private invoicestore: InvoiceStore,
              private http: HttpClient,
              private notificationsService: NotificationsService) {

  }
  
   get(): any {
    const items = [
      {
        id:1,
        name: 'milk',
        quantity:1,
          price:100,
          discount:5
      },
      {
        id:2,
        name: 'car',
        quantity:25,
          rate:8,
          discount:2
      },
          
      {
        id:3,
        name: 'food',
        quantity:20,
          rate:9,
          discount:3
      
          },
        ]
  //   const url = `${environment.apiUrl}/`;
  //   return this.http.get<SaleOrderModel[]>(url)
  //     .pipe(
  //       tap((result: any) => {
  //         if (result.success) {
    
            this.invoicestore.set(items);
  //         } else {
  //           this.notificationsService.error('Error occurred', result.error);
  //         }
  //       }, error => {
  //         this.notificationsService.error('Error occurred', error.message);
  //       })
  //     );
   }
  add(data): Observable<any> {
    const url = `${environment.apiUrl}/insert-SO`;
    return this.http.post(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.invoicestore.add(result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  update(id, data): Observable<any> {
    const url = `${environment.apiUrl}//${id}`;
    return this.http.put(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.invoicestore.update(result.data.id, result.data);
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
            this.invoicestore.remove(result.data.id);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
}
