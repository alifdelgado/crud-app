import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Item } from './../../models/item/item.model';
import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shoppingList$: Observable<Item[]>
  constructor(public navCtrl: NavController, private shopLS: ShoppingListService) {
    this.shoppingList$ = this.shopLS.getShoppingList().snapshotChanges().map(changes => {
      return changes.map(c =>({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

}
