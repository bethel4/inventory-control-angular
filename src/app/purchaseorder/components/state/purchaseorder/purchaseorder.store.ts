import { Lookup } from '../../../../shared/models/lookup.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface PurchaseOrderState extends EntityState<Lookup> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'purchaseorder' })
export class PurchaseOrderStore extends EntityStore<PurchaseOrderState> {
  constructor() {
    super();
  }
}
