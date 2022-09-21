import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PurchaseOrderState, PurchaseOrderStore } from './purchaseorder.store';

@Injectable({ providedIn: 'root' })
export class PurchaseOrderQuery extends QueryEntity<PurchaseOrderState> {
  constructor(protected store: PurchaseOrderStore) {
    super(store);
  }
}
