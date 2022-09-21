import { Lookup } from '../../../../shared/models/lookup.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface WarehouseState extends EntityState<Lookup> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'warehouse' })
export class WarehouseStore extends EntityStore<WarehouseState> {
  constructor() {
    super();
  }
}
