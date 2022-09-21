import { SessionState, SessionStore } from './session.store';
import { environment } from '@environment/environment';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '@shared/services/storage.service';
import { PanelMenuModule } from 'primeng/panelmenu';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  SessionStore: any;
  notificationsService: any;
  constructor(
    private store: SessionStore,
    private http: HttpClient,
    private service: StorageService
  ) {}
  register(data): Observable<any> {
    console.log(data);
    debugger
    const url = `${environment.apiUrl}/auth/signup`;
    return this.http.post(url, data).pipe(
      tap(
        (result: any) => {
          if (result.success) {
            this.SessionStore.add(result.data);
            console.log(this.SessionStore);
          } else {
            console.log('error');
          }
        },
        (error) => {
          this.notificationsService.error('Error occurred', error.message);
        }
      )
    );
  }

  verfiy(data): Observable<any> {
    const url = `${environment.apiUrl}/auth/activate`;
    console.log(data);
    debugger;
    return this.http.patch(url, data).pipe(
      tap(
        (result: any) => {
          if (result.success) {
            this.SessionStore.update(result.data);
          } else {
            console.log('err');
          }
        },
        (error) => {
          this.notificationsService.error('Error occurred', error.message);
        }
      )
    );
  }
  forgetpassword(data): Observable<any> {
    debugger
    const url = `${environment.apiUrl}/auth/forgot`;
    console.log(data);
    debugger;
    return this.http.patch(url, data).pipe(
      tap(
        (result: any) => {
          if (result.success) {
            this.SessionStore.update(result.data);
          } else {
            console.log('err');
          }
        },
        (error) => {
          this.notificationsService.error('Error occurred', error.message);
        }
      )
    );
  }

  restpassword(data,token,id,orgId): Observable<any> {
    const url = `${environment.apiUrl}/auth/reset/${token}/${id}/${orgId} `;
    debugger;
    return this.http.patch(url, data).pipe(
      tap(
        (result: any) => {
          if (result.success) {
            this.SessionStore.update(result.data);
          } else {
            console.log('err');
          }
        },
        (error) => {
          this.notificationsService.error('Error occurred', error.message);
        }
      )
    );
  }


  login(data) {
    const url = `${environment.apiUrl}/auth/login`;
    return this.http
      .post<SessionState>(url, data)
      .pipe(tap((session) => this.store.login(session)));
  }

  // logout(token) {
  //   const url = `${environment.apiUrl}/auth/logout`;
  //   return this.http.patch(url, token).pipe(
  //     tap(
  //       (result: any) => {
  //         if (result.success) {
  //           console.log(result);
  //           this.store.logout();
  //         } else {
  //           console.log('err');
  //         }
  //       },
  //       (error) => {
  //         this.notificationsService.error('Error occurred', error.message);
  //       }
  //     )
  //   );
  // }
  logout() {
    this.store.logout();
  }
}
