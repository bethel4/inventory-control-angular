import { Lookup } from './../../../../shared/models/lookup.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface ItemState extends EntityState<Lookup> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'item' })
export class ItemStore extends EntityStore<ItemState> {
  constructor() {
    super();
  }
}
