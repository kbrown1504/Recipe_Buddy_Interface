import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipePage } from './recipe.page';

const routes: Routes = [
  {
    path: '/RecipePage',
    component: RecipePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}
