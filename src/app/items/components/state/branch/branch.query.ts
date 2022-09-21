import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BranchState, BranchStore } from './branch.store';

@Injectable({ providedIn: 'root' })
export class BranchQuery extends QueryEntity<BranchState> {
  constructor(protected store: BranchStore) {
    super(store);
  }
}
