import { Component, Output, EventEmitter } from '@angular/core';
import { PictureService } from './services/picture.service';
import { MaterialModule } from '../../shared/material.module';
import { PictureCards } from "./components/picture-cards/picture-cards";
import { PictureList } from "./components/picture-list/picture-list";
import { ActionService } from '../../shared/services/action.service';

@Component({
  selector: 'app-pictures',
  imports: [MaterialModule, PictureCards, PictureList],
  templateUrl: './pictures.html',
  styleUrl: './pictures.scss',
  standalone: true
})
export class Pictures {
  @Output() pictures: any = [];
  @Output() filteredPictures: any = [];

  constructor(private picService: PictureService, private actionSvc: ActionService) {
  }

  ngOnInit() {
    queueMicrotask(() => {
      this.actionSvc.triggerTitleAction('Pictures');
    });
    this.loadPictures();
  }

  loadPictures() {
    this.picService.getPictureList().subscribe(p => {
      this.pictures = p;
      this.filteredPictures = this.pictures;
      console.log('pictures', p);
    });
  }

  onInputEvent(e: Event): void {
    console.log('entered', (event?.target as HTMLInputElement).value);
    const entered = (event?.target as HTMLInputElement).value;
    if (!entered) {
      this.filteredPictures = this.pictures;
    } else {
      const filtered = this.filteredPictures.filter((f: any) => f.id.toLowerCase().includes(entered.toLowerCase()))
      this.filteredPictures = filtered;
      console.log('filtered', this.filteredPictures)
    }
  }

  handleClick(e: Event): void {
    console.log(`ID ${e} clicked.`);
  }
}
