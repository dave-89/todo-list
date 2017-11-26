import { Component } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemService]
})
export class AppComponent {

  newTodo: Item = new Item();;

  constructor(private itemService: ItemService) {
  }

  markAsDone(item) {
    this.itemService.toggleStatusById(item.id);
  }

  editItem(item, edited) {
    console.log('New value ' + edited);
    this.itemService.editItemById(item.id, edited);
    console.log('Current items: ' + JSON.stringify(this.getItems()));
  }

  addItem() {
    this.itemService.addItem(this.newTodo);
    this.newTodo = new Item();
  }

  deleteItem(item) {
    this.itemService.deleteItemById(item.id);
  }

  getItems() {
    return this.itemService.getItems();
  }

  get items() {
    return this.getItems();
  }

  get not_done() {
    return this.getItems().filter(item => ! item.done).length;
  }
  
}
