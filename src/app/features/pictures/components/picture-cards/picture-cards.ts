import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';

@Component({
  selector: 'app-picture-cards',
  imports: [MaterialModule],
  templateUrl: './picture-cards.html',
  styleUrl: './picture-cards.scss',
  standalone: true
})

export class PictureCards {

  @Input() pictures: any = []
  @Output() onClick = new EventEmitter<any>();

}
