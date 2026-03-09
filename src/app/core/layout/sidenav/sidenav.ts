import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActionService } from '../../../shared/services/action.service';
import { MaterialModule } from '../../../shared/material.module';

@Component({
  selector: 'app-sidenav',
  imports: [RouterModule, MaterialModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
  standalone: true
})
export class Sidenav {

  constructor(private actionSvc: ActionService) {}

  get drawerOpen() {
    return this.actionSvc.currentMenuAction;
  }

}
