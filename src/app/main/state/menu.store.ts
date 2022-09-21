import {
  ActiveState,
  EntityState,
  EntityStore,
  StoreConfig,
} from '@datorama/akita';
import { Menu } from '../models/menu.model';
import { Injectable } from '@angular/core';

export interface MenuState extends EntityState<any>, ActiveState {}

const initialState = {
  active: null,
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'menu' })
export class MenuStore extends EntityStore<MenuState> {
  constructor() {
    super(initialState);
  }
}
