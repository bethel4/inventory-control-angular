import { Query } from '@datorama/akita';
import { SessionState, SessionStore } from './session.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionQuery extends Query<SessionState> {
  [x: string]: any;
  constructor(protected store: SessionStore) {
    super(store);
  }
  selectAll(){
    console.log(this.select([state=>console.log(state.user)]))
    return this.select((state)=>state.user)

  }
  isLoggedIn() {
    return !!this.getValue().accessToken;
  }

  get accessToken() {
    return this.getValue().accessToken;
  }
}
