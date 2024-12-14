import { Component } from '@angular/core';
import { TabBarViewComponent } from "../../views/tab-bar-view/tab-bar-view.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [TabBarViewComponent, CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor(private router: Router) { }

  search_term: string = '';

  good_deals = [
    { src: 'assets/icecream.jpg', alt: 'icecream', title: 'Free Ice Cream' },
    { src: 'assets/pizza.png', alt: 'pizza', title: '20% off Margherita' },
    { src: 'assets/tteokbokki.png', alt: 'tteokbokki', title: '30% off Tteokbokki' },
  ];

  explore_neighborhood = [
    { src: 'assets/evergreen-brick-works.jpg', alt: 'evergreen-brick-works', title: 'Evergreen Brick Works' },
    { src: 'assets/summer-hill.jpg', alt: 'summer-hill', title: 'Summer Hill' },
  ];

  foods = [
    'Margherita', 'Ice cream', 'Tteokbokki'
  ];

  get filtered_suggestions() {
    return this.foods.filter((food) => food.toLowerCase().includes(this.search_term.toLowerCase()));
  }

  on_search() {
    this.router.navigate(['/product']);
  }
}
