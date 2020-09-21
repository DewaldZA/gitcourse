import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//ALL ROUTES GO HERE
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)}
];

// NGMODULE TRANSFORMS NORMAL TS FILE TO A ANGULAR MODULE
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
