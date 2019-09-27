import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Item } from './../../models/item/item.model';

@Injectable()
export class ShoppingListService {
  private shoppingListRef = this.afdb.list<Item>('crud-app');

  constructor(private afdb: AngularFireDatabase) {
  }

  getShoppingList() {
    return this.shoppingListRef;
  }

  addItem(item: Item) {
    return this.shoppingListRef.push(item);
  }
}
