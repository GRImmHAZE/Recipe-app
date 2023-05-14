import { Component, OnInit } from '@angular/core';
import { RecepiService } from '../recepi.service';
import { ShoppingListService } from '../shopping-list.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-recepi-detail',
  templateUrl: './recepi-detail.component.html',
  styleUrls: ['./recepi-detail.component.scss'],
})
export class RecepiDetailComponent  implements OnInit {
  recipe: any;

  constructor(public recipeService: RecepiService, private shoppingListService: ShoppingListService, private toastController: ToastController) { }

  ngOnInit() {
   this.recipeService.detail.subscribe((res :any) => {
    this.recipe = res
    console.log(this.recipe,"hello");
    
   })
   
  }

  addToShoppingList(ingredient: any) {
    this.shoppingListService.addToShoppingList(ingredient);
    this.showToast('Item added to the shopping list 👍');
  }

  removeFromShoppingList(index: number) {
    this.shoppingListService.removeFromShoppingList(index);
    this.showToast('Item removed from the shopping list 👍');
  }

  async showToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      position: 'bottom',
    });
    toast.present();
  }
}
