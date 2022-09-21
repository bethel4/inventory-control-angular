import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SuplierState, SuplierStore } from './suplier.stroe';

@Injectable({ providedIn: 'root' })
export class SuplierQuery extends QueryEntity<SuplierState> {
  constructor(protected store: SuplierStore) {
    super(store);
  }
}
