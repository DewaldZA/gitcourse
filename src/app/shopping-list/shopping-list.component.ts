import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.serivce';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription

  //INJECTEDING SHOPPING LIST SERVICE
  constructor(private slService: ShoppingListService, private loggingService: LoggingService) { }

  //ASSINGING INGREDIENTS TO WHATEVER THE SHOPPING LIST RETURNS WITH THE GETINGREDIENTS METHOD
  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
  //REACHING OUT TO SHOPPING LIST SERVICE AND SUBSCRIBING TO IT
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );

      this.loggingService.printlog('Hello from shopping list component ngoninit')
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
