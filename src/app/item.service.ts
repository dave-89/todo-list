import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class ItemService {

  private items: Item[] = [];

  constructor() { }

  addItem(item: Item) {
    this.items.push(item);
    return this;
  }

  deleteItemById(id: number) {
    this.items = this.items.filter(item => item.id != id);
    return this;
  }

  toggleStatusById(id: number) {
    this.items.map(item => {
      if(item.id == id) {
        item.done = !item.done;
      }
    });
    return this;
  }

}
