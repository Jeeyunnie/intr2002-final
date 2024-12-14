import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-bar-view',
  templateUrl: './tab-bar-view.component.html',
  styleUrls: ['./tab-bar-view.component.scss'],
  imports: [CommonModule]
})
export class TabBarViewComponent {
  selected_tab: string = '';

  constructor(private router: Router) { }

  on_search() {
    this.selected_tab = 'search';
    this.router.navigate(['/search']);
  }

  on_product() {
    this.selected_tab = 'product';
    this.router.navigate(['/product']);
  }

  on_discount() {
    this.selected_tab = 'discount';
    this.router.navigate(['/discount']);
  }

  on_profile() {
    this.selected_tab = 'my-page';
    this.router.navigate(['/my-page']);
  }

  on_community() {
    this.selected_tab = 'community';
    this.router.navigate(['/community']);
  }
}
