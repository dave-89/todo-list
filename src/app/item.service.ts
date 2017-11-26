import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class ItemService {

  private items: Item[] = [];

  constructor() { }

  addItem(item: Item) {
    if(this.items.length >0 ) {
      item.id = this.items[this.items.length-1].id + 1;
    } else {
      item.id = 0;
    }
    this.items.push(item);
    return this;
  }

  editItemById(id: number, edited: string) {
    this.items
      .find(item => item.id==id)
      .description = edited;
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

  getItems() {
    return this.items;
  }

}
