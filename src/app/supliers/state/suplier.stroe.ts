import { SuplierModel } from './../model/suplier.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface SuplierState extends EntityState<SuplierModel> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Suplier' })
export class SuplierStore extends EntityStore<SuplierState> {
  constructor() {
    super();
  }
}
