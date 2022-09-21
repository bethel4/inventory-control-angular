import { ID } from '@datorama/akita';

export interface Menu {
  id: ID;
  text: string;
  iconCss: string;
  url: string;
  items: Array<Menu>;
}
