import { Lookup } from '../../../../shared/models/lookup.model';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface InvoiceState extends EntityState<any>,ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'invoice' })
export class InvoiceStore extends EntityStore<InvoiceState> {
  constructor() {
    super();
  }
}
