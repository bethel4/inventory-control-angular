import { Lookup } from '../../../../shared/models/lookup.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface OrganzationState extends EntityState<Lookup> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Organzation' })
export class OrganzationStore extends EntityStore<OrganzationState> {
  constructor() {
    super();
  }
}
