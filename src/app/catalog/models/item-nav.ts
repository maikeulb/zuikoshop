import { Item } from './item';

export interface ItemNav {
  item: Item;
  previousId: string;
  nextId: string;
  index: number;
  count: number;
}
