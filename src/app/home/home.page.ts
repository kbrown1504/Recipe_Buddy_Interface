import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recipeList = [];

  constructor(private photoService: PhotoService) {}

  takeNewPhoto() {
    console.log('PHOTO');
    this.photoService.takePhoto();
  }

  getRecipes() {
    this.recipeList.push({name:"Roasted Chicken", url:"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Country-Roasted-Chicken_EXPS_FT20_17623_F_0130_1.jpg"});
    this.recipeList.push({name:"chicken Sandwhich", url:"https://upload.wikimedia.org/wikipedia/commons/1/1f/Chicken_salad_sandwich_01.jpg"});
  }
}
