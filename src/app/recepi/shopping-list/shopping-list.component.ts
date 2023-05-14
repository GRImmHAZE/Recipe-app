import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent  implements OnInit {
  shoppingListItems: any = [];
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListItems = this.shoppingListService.getShoppingList();
  }

  removeFromShoppingList(item: any) {
    this.shoppingListService.removeFromShoppingList(item);
    this.shoppingListItems = this.shoppingListService.getShoppingList();
  }

}
