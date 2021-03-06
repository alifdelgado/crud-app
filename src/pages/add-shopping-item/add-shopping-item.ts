import { Item } from './../../models/item/item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {
  item: Item = {
    name: '',
    quantity: undefined,
    price: undefined
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private shopLS: ShoppingListService) {
  }

  addItem(item: Item) {
    this.shopLS.addItem(item).then(ref => {
      console.log(ref.key);
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    });
  }
}
