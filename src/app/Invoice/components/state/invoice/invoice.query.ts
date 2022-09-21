import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { InvoiceState, InvoiceStore } from './invoice.store';

@Injectable({ providedIn: 'root' })
export class InvoiceQuery extends QueryEntity<InvoiceState> {
  constructor(protected store: InvoiceStore) {
    super(store);
  }

  invoce():any{
    return this.selectAll()
  }
}
