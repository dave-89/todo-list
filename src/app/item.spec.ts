import { Item } from './item';

describe('Item', () => {
  it('should create an instance', () => {
    expect(new Item()).toBeTruthy();
  });

  it('constructor should populate the values', () => {
    let item = new Item({
      description: 'Milk',
    });
    expect(item.description).toEqual('Milk');
    expect(item.done).toEqual(false);
  });
});
