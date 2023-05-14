import { Component, OnInit } from '@angular/core';
import { RecepiService } from './recepi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recepi',
  templateUrl: './recepi.page.html',
  styleUrls: ['./recepi.page.scss'],
})
export class RecepiPage implements OnInit {
  searchTerm: any;
  query: any;
  recipes: any = [];
  favoriteRecipes: any = [];

  constructor(public recepi: RecepiService, private router: Router,) { }

  ngOnInit() {
    this.recepi.getFavoriteRecipes().subscribe((recipes: any) => {
      this.favoriteRecipes = recipes;
      console.log(this.favoriteRecipes,"dello");
    });
  }

  onSearch(event: any) {
    this.searchTerm = event.target.value;
    this.query = this.searchTerm;
    this.recepi.searchRecipes(this.query).subscribe(async (response: any) => {
      this.recipes = await response?.hits;
      console.log(this.recipes,"something");
    });
  }

  navigateToRecipeDetail(detail: any) {
    this.recepi.detail.next(detail)
    this.router.navigate(['recipe/detail']);
  }

  goToShoppingList(){
    this.router.navigate(['recipe/shoppinglist']);
  }

  removeFavorite(recipe: any) {
    this.recepi.removeFavorite(recipe);
    this.recepi.getFavoriteRecipes().subscribe((recipes: any) => {
      this.favoriteRecipes = recipes;
    });
  }

//   let myArray = JSON.parse(localStorage.getItem('myArray')) || [];

// // Push your object into the array
// myArray.push(myObject);

// // Stringify the array
// let serializedArray = JSON.stringify(myArray);

// // Set the serialized array in local storage
// localStorage.setItem('myArray', serializedArray);

}
