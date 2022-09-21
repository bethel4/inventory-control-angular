import { Store, StoreConfig } from '@datorama/akita';
import { StorageService } from '@shared/services/storage.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '@environment/environment';

export interface SessionState {
  accessToken: string;
  user: User;
}

export const createInitialState = (): SessionState => {
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0. yRQYnWzskCZUxPwaQupWkiUzKELZ49eM7oWxAQK_ZXw"

  //const accessToken = JSON.parse(localStorage.getItem(environment.sessionKey));
  if (accessToken) {
    const jwt = new JwtHelperService();
    const decoded = jwt.decodeToken(accessToken);
    return {
      accessToken,
      user: decoded,
    };
  } else {
    return {
      accessToken: null,
      user: null,
    };
  }
};

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor(private service: StorageService) {
    super(createInitialState());
  }

  login(state: SessionState) {
    this.update(state);
    this.service.save(environment.sessionKey, state.accessToken);
  }

  logout() {
    this.service.remove(environment.sessionKey);
    this.update(createInitialState());
  }
}
