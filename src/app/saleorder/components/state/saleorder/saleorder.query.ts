import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SaleOrderState, SaleOrderStore } from './saleorder.store';

@Injectable({ providedIn: 'root' })
export class POrderQuery extends QueryEntity<SaleOrderState> {
  constructor(protected store: SaleOrderStore) {
    super(store);
  }
}
