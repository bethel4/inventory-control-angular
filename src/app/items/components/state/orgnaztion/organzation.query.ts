import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { OrganzationState, OrganzationStore } from './organzation.stroe';

@Injectable({ providedIn: 'root' })
export class ItemQuery extends QueryEntity<OrganzationState> {
  constructor(protected store: OrganzationStore) {
    super(store);
  }
}
