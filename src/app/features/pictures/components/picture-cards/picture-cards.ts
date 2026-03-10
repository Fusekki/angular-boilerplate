import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';

@Component({
  selector: 'app-picture-cards',
  imports: [MaterialModule],
  templateUrl: './picture-cards.html',
  styleUrl: './picture-cards.scss',
  standalone: true
})

export class PictureCards {

  _internalPictures: any = [];

  @Input()
  set pictures(value: any) {
    console.log('Value changed to:', value);
    this._internalPictures = value;
  }

}
