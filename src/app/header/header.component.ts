import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { HeaderNavListComponent } from './header-nav-list/header-nav-list.component';
import { HeaderSearchComponent } from './header-search/header-search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderNavListComponent, HeaderSearchComponent, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
