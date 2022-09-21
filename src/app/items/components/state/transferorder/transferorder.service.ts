import { TransferOrderStore } from './transferorder.store';
import { NotificationsService } from 'angular2-notifications';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { TransferOrderModel } from '../../model/transfeorder.model';

@Injectable({ providedIn: 'root' })
export class TransferOrdersService {

  constructor(private transferStore: TransferOrderStore,
              private http: HttpClient,
              private notificationsService: NotificationsService) {

  }
  get(): Observable<any> {
    const url = `${environment.apiUrl}/`;
    return this.http.get<TransferOrderModel[]>(url)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.transferStore.set(result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
  add(data): Observable<any> {
    const url = `${environment.apiUrl}/`;
    return this.http.post(url, data)
      .pipe(
        tap((result: any) => {
          if (result.success) {
            this.transferStore.add(result.data);
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
            this.transferStore.update(result.data.id, result.data);
          } else {
            this.notificationsService.error('Error occurred', result.error);
          }
        }, error => {
          this.notificationsService.error('Error occurred', error.message);
        })
      );
  }
}
