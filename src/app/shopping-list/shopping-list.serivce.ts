import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  //EVENTEMIITER CAN EMIT INGREDIENTS ARRAY
  ingredientsChanged = new Subject<Ingredient[]>();

  startedEditing = new Subject<number>();

  //PRIVATE SO THAT THE RECIPES ARRAY CANT BE ACCESSED FROM OUTSIDE
  private ingredients: Ingredient[] =[
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ];

  //SLICE RETURNS NEW ARRAY WHICH IS EXACT COPY OF THE RECIPES ARRAY IN RECIPE SERVICE! || THAT WAY YOU CAN GET ACCESS TO THE ARRAY BUT ITS ONLY A COPY!
  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  //RECIEVES INGREDIENT AND PUSHES A NEW INGREDIENT ON IT
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    //CALLED WHENEVER THE ARRAY CHANGES
    this.ingredientsChanged.next(this.ingredients.slice());
  }


  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);

    //ADDING A SPREAD OPERATOR WITH 3 DOTS TO SPREAD OUR INGREDIENTS TO A LIST OF SINGLE INGREDIENTS | THEN WE EMIT THAT THE INGREDIENTS CHANGED PASSING A COPY OF IT
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
      this.ingredients.splice(index, 1);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
  }
