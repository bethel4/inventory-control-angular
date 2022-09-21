import { Lookup } from '../../../../shared/models/lookup.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface SaleOrderState extends EntityState<Lookup> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'saleorder' })
export class SaleOrderStore extends EntityStore<SaleOrderState> {
  constructor() {
    super();
  }
}
