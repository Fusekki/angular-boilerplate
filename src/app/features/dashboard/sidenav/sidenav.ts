import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActionService } from '../../../core/services/action.service';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-sidenav',
  imports: [MatButtonModule, MatSidenavModule, RouterModule, MatDividerModule],
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
