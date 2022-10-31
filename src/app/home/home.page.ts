import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private photoService: PhotoService) {}

  takeNewPhoto() {
    console.log('PHOTO');
    this.photoService.takePhoto();
  }

}
