import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private shoppingList: any[] = [];

  constructor() {
    this.loadShoppingList();
   }

   private loadShoppingList(): void {
    const data = localStorage.getItem('shoppingList');
    if (data) {
      this.shoppingList = JSON.parse(data);
    }
  }

  public saveShoppingList(): void {
    localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));
  }

  public addToShoppingList(ingredient: any): void {
    this.shoppingList.push(ingredient);
    this.saveShoppingList();
  }

  public removeFromShoppingList(index: number): void {
    this.shoppingList.splice(index, 1);
    this.saveShoppingList();
  }

  public getShoppingList(): any[] {
    return this.shoppingList;
  }
}
