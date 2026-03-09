import { Component } from '@angular/core';
import { PictureService } from './services/picture.service';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-pictures',
  imports: [MaterialModule],
  templateUrl: './pictures.html',
  styleUrl: './pictures.scss',
  standalone: true
})
export class Pictures {
  pictures: any = [];

  constructor(private picService: PictureService ) {}

  ngOnInit() {
    console.log('Environment Check:', import.meta.env);
    this.loadPictures();
  }

  loadPictures() {
    this.picService.getPictureList().subscribe(p => this.pictures = p);
  }
}
