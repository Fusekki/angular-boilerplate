import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Sidenav } from "../sidenav/sidenav";

@Component({
  selector: 'app-layout',
  imports: [Header, Sidenav],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  standalone: true
})
export class Layout {

}
