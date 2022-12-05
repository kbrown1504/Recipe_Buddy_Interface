import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { recipeService } from '../services/recipe.service';
import { NavController } from '@ionic/angular';
import { Recipe } from 'src/models/recipe';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public recipeList: Recipe[] = [];
  
  constructor(private photoService: PhotoService, 
    private recipeService: recipeService,
    private navContoller: NavController,
    private zone: NgZone,
    ) {}
  sendRecipe(recipe: Recipe) {
    this.recipeService.setRecipe(recipe);
    console.log("added recipe")
    //navigate to next page somehow
    this.navContoller.navigateForward("recipePage")
  }

  getPhoto() {
    console.log('GALLERY');
    this.photoService.getImageFromGallery();
  }
  takeNewPhoto() {
    console.log('PHOTO');
    this.photoService.takePhoto();
  }

  getRecipes() {
    this.zone.run(() => {
      this.recipeList = []
    this.recipeList.push({name: "Spaghetti", 
    url: "https://lilluna.com/wp-content/uploads/2018/05/easy-spaghetti-resize-2.jpg", 
    ingredients: ["Spaghetti noodles", "Pasta Sauce"],
    steps: [
      "Boil a pot of water",
      "Put your Spaghetti noodles into the boiling water",
      "Wait around 15 minutes",
      "Strain your Spaghetti noodles and get rid of the water",
      "Mix in your sauce with the Spaghetti noodles",
      "Enjoy!"
    ],
  });

  this.recipeList.push({
    name: "Bacon and Eggs",
    url: "https://i.imgur.com/fg9iEmZ.jpg",
    ingredients: ["Bacon", "Eggs", "Seasonings as desired"],
    steps: [
      "Using a large skillet, place slices of bacon in the pan over medium-high heat.",
      "Cook your bacon, turning it every couple minutes unitl it reaches the crispiness you desire.",
      "Drain the bacon on a plate layered with paper towels.",
      "Reserve the bacon grease",
      "Once bacon is cooked, turn your heat down to medium-low. Don't drain the bacon fat. You are going to use it all to fry your eggs.",
      "Crack the eggs into the pan, and let them begin to cook for about 30-45 seconds.",
      "Using a large spoon, start to baste the eggs with the bacon fat by scooping the fat over the tops of the eggs (you aren't going to flip these eggs)",
      "After about three minutes, the eggs should look done. The whites will be firm and the yolk will be partially cooked.",
      "Use a slotted spatula to remove the eggs from the pan, then blot each egg with a paper towel before putting it on the plate. So there is very little fat on the eggs.",
      "Plate your eggs and bacon, season with salt and pepper as desired",
      "Enjoy!"
    ]
  });

  this.recipeList.push({
    name: "Peanut Butter and Jelly Sandwich",
    url: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2018_grilled-peanut-butter-and-jelly_20336_760x580.jpg?ext=.jpg",
    ingredients: ["Peanut Butter", "Jelly", "Sliced Bread"],
    steps: [
      "Take out two pieces of sliced bread",
      "Spread jelly on one slice of bread",
      "Spread peanut butter on the other slice of bread",
      "Put the two pieces of bread together",
      "Enjoy!"
    ]
  });
    })
  }

  
}
