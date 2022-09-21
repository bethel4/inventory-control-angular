import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TransferOrderState, TransferOrderStore } from './transferorder.store';

@Injectable({ providedIn: 'root' })
export class TransferOrderQuery extends QueryEntity<TransferOrderState> {
  constructor(protected store: TransferOrderStore) {
    super(store);
  }
}
