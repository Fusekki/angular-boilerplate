import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';

@Component({
  selector: 'app-picture-list',
  imports: [MaterialModule],
  templateUrl: './picture-list.html',
  styleUrl: './picture-list.scss',
  standalone: true
})
export class PictureList {

  _internalPictures: any = [];

  @Input()
  set pictures(value: any) {
    console.log('Value changed to:', value);
    this._internalPictures = value;
  }

}
