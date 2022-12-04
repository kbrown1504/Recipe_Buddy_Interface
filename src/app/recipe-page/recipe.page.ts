import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { NavController } from '@ionic/angular';
import { Recipe } from 'src/models/recipe';
import { recipeService } from '../services/recipe.service';


@Component({
  selector: 'app-home',
  templateUrl: 'recipe.page.html',
  styleUrls: ['recipe.page.scss'],
})

export class RecipePage{
  constructor(private photoService: PhotoService, 
    private recipeService: recipeService,
    private navContoller: NavController
    ) {}

  public recipe = this.recipeService.getRecipe();
}