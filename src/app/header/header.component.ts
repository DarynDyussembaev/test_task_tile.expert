import { Component } from '@angular/core';
import {HeaderNavListComponent} from "./components/header-nav-list/header-nav-list/header-nav-list.component";
import {HeaderSearchComponent} from "./components/header-search/header-search/header-search.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeaderNavListComponent,
    HeaderSearchComponent,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
