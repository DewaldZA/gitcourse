import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.serivce';
import { Subject } from 'rxjs';



@Injectable()
export class RecipeService {
  recipesChannged = new Subject<Recipe[]>();

  //PUBLIC PROPERTY | OBJECT INSTANCHIHATED BY EVENTEMIITTER AND HOLDS RECIPE DATA


  //PRIVATE SO THAT THE RECIPES ARRAY CANT BE ACCESSED FROM OUTSIDE
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Steak',
  //     'A super-tasty Steak - awesome',
  //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
  //     [
  //       new Ingredient('Meast', 1),
  //       new Ingredient('French Fries', 20),
  //     ]),
  //   new Recipe(
  //     'Another test recipe',
  //     ' This is another test',
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/285px-RedDot_Burger.jpg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meat', 1),
  //       new Ingredient('Tamato', 1),
  //       new Ingredient('Chedder', 1),
  //       new Ingredient('fries', 20),
  //     ]),
  // ];

  private recipes: Recipe[] = [];

  //INJECTING SLSERVICE WITH INJECTABLE AT THE TOP
  constructor(private slService: ShoppingListService) {

  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChannged.next(this.recipes.slice());
  }


  //SLICE RETURNS NEW ARRAY WHICH IS EXACT COPY OF THE RECIPES ARRAY IN RECIPE SERVICE! || THAT WAY YOU CAN GET ACCESS TO THE ARRAY BUT ITS ONLY A COPY!
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  //REACHING OUT TO SLSERVICE
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChannged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChannged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChannged.next(this.recipes.slice());
  }
}
