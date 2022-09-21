import { Lookup } from '../../../../shared/models/lookup.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface TransferOrderState extends EntityState<Lookup> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'transferorder' })
export class TransferOrderStore extends EntityStore<TransferOrderState> {
  constructor() {
    super();
  }
}
