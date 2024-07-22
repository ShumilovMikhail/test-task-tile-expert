import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderSearchFiltersComponent } from '../header-search-filters/header-search-filters.component';
import { ClickOutsideDirective } from '../directives/click-outside.directive';

@Component({
  selector: 'app-header-search',
  standalone: true,
  imports: [HeaderSearchFiltersComponent, CommonModule, ClickOutsideDirective],
  templateUrl: './header-search.component.html',
  styleUrl: './header-search.component.scss',
})
export class HeaderSearchComponent {
  public isFiltersOpen: boolean = false;
  public isSearchOpen: boolean = false;

  public isSearchToggle(isSearchOpen: boolean): void {
    this.isSearchOpen = isSearchOpen;
    this.isFiltersOpen = !isSearchOpen ? false : this.isFiltersOpen;
  }

  public isFiltersOpenToggle(isFiltersOpen: boolean): void {
    this.isFiltersOpen = isFiltersOpen;
  }
}
