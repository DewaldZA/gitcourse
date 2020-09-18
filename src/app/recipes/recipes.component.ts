import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe;


  //INJECTED RECIPE SERVICE
  constructor(
    // private recipeService: RecipeService
    ) { }

  //SETTING UP LISTHENER SO ON THE RECIPE SELECTOR YOU CAN SUBSCRIBE TO IT (GET INFORMED ABOUT ANY CHANGES.)
  ngOnInit(): void {
    // this.recipeService.recipeSelected
    //   .subscribe(
    //     //BRCKETS BENEATH IS THE ARGUMANT LIST AND AFTER THAT THE ES6 ARROW FUNCTION BODY
    //     (recipe: Recipe) => {
    //       this.selectedRecipe = recipe;
    //     }
    //   );
  }



}
