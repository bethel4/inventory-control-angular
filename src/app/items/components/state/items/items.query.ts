import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ItemState, ItemStore } from './items.stroe';

@Injectable({ providedIn: 'root' })
export class ItemQuery extends QueryEntity<ItemState> {
  constructor(protected store: ItemStore) {
    super(store);
  }
}
