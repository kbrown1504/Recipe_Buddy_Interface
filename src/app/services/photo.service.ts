import { Injectable } from '@angular/core'; 

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
//import { Preferences } from '@capacitor/preferences';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photo;

  constructor() { }

  public async takePhoto() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.photo = capturedPhoto;
  }

  public async getImageFromGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      quality: 100
    });
    this.photo = capturedPhoto;
  }
}
