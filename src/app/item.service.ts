import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Item } from './item';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {

  private items: Item[] = [];

  constructor(private http: Http) {
    this.http.get('/api/list')
      .map((res:Response) => res.json())
      .subscribe(val => {
        this.items = val;
        console.log('Loading initial items: ', this.items);
      });
  }

  addItem(item: Item) {
    if(this.items.length >0 ) {
      item.id = this.items[this.items.length-1].id + 1;
    } else {
      item.id = 0;
    }
    this.http.put('/api/add', item)
      .map((res:Response) => res.json())
      .subscribe(val => {
        this.items = val;
        console.log('Updating items: ', this.items);
      });
    return this;
  }

  editItemById(id: number, edited: string) {
    this.items
      .find(item => item.id==id)
      .description = edited;
    return this;
  }

  deleteItemById(id: number) {
    this.http.post('/api/delete', {id: id})
    .map((res:Response) => res.json())
    .subscribe(val => {
      this.items = val;
      console.log('Updating items: ', this.items);
    });
    return this;
  }

  toggleStatusById(id: number) {
    this.http.post('/api/mark', {id: id})
    .map((res:Response) => res.json())
    .subscribe(val => {
      this.items = val;
      console.log('Updating items: ', this.items);
    });
    return this;
  }

  getItems() {
    return this.items;
  }

}
