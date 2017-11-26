import { TestBed, inject } from '@angular/core/testing';

import { ItemService } from './item.service';
import { Item } from './item';

describe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemService]
    });
  });

  it('should be created', inject([ItemService], (service: ItemService) => {
    expect(service).toBeTruthy();
  }));

  describe('items of the service', () => {
    var itemService;

    beforeEach(() => {
      itemService = new ItemService(); 
    });

    it('a new service has no items', () => {
      expect(itemService.items).toEqual([]);
      expect(itemService.items.length).toEqual(0);
    });

    it('a service has one item after adding one item', () => {
      itemService.addItem(new Item({description: 'Milk'}));
      expect(itemService.items.length).toEqual(1);
    });

    it('a service with one item has zero item once one has been deleted', () => {
      itemService.addItem(new Item({description: 'Milk'}));
      expect(itemService.items.length).toEqual(1);
      var id = itemService.getItems()[0].id;
      itemService.deleteItemById(id);
      expect(itemService.items.length).toEqual(0);
    });

    it('a service is able to edit the text', () => {
      itemService.addItem(new Item({description: 'Milk'}));
      var description = itemService.getItems()[0].description;
      expect(description).toEqual('Milk');
      var id = itemService.getItems()[0].id;
      itemService.editItemById(id, 'Bread');
      description = itemService.getItems()[0].description;
      expect(description).toEqual('Bread');
    });

  });
});
