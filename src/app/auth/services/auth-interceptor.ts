import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionQuery } from '../state/session.query';

@Injectable()
export class AuthInterceptor {
  constructor(private query: SessionQuery) {}

  getHeader() {
    const token = this.query.accessToken;
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.endsWith('/login')) {
      return next.handle(req);
    }

    const header = this.getHeader();
    const newReq = req.clone({ headers: header });
    return next.handle(newReq);
  }
}
