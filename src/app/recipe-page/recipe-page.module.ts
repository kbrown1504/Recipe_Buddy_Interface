import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RecipePage } from './recipe.page';

import { RecipeRoutingModule } from './recipe-page-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeRoutingModule
  ],
  declarations: [RecipePage]
})
export class RecipePageModule {}
