import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepiService {
  private Url = 'https://edamam-recipe-search.p.rapidapi.com/search?q=';
  private recipes: any[] = [];
  detail: any = new BehaviorSubject({})
  private favorites: any[] = [];

  constructor(private http: HttpClient) { }

  searchRecipes(query: any): Observable<any> {
    const url = `${this.Url}${query}`;
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'c9b47e5ffcmshadf27d45ad00051p12e782jsn6042a2bd276e',
      'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
    });
    return this.http.get(url, { headers });
  }

  getRecipeById(recipeId: string): Observable<any> {
    const recipe = this.recipes.find(r => r.recipe.uri === recipeId);
    return of(recipe);
  }

  addFavorite(recipe: any): void {
    if (!this.isFavorite(recipe)) {
      this.favorites.push(recipe);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }

  removeFavorite(recipe: any): void {
    const index = this.favorites.findIndex((r: any) => r.recipe.uri === recipe.recipe.uri);
    if (index !== -1) {
      this.favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }

  isFavorite(recipe: any): boolean {
    return this.favorites.findIndex((r: any) => r.recipe.uri === recipe.recipe.uri) !== -1;
  }

  getFavoriteRecipes(): Observable<any[]> {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.favorites = favorites;
    return of(favorites);
  }
}
