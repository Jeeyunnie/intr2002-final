import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-screen',
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatIconModule],
  templateUrl: './product-screen.component.html',
  styleUrl: './product-screen.component.scss'
})
export class ProductScreenComponent {

  constructor(private router: Router) { }

  currentIndex = 0;
  good_deals = [
    {
      src: 'assets/icee.png',
      alt: 'icecream',
      title: 'Ice Cream',
      description: 'Indulge in a scoop of creamy, velvety ice cream made from the finest ingredients, with a variety of delicious flavors to choose from.'
    },
    {
      src: 'assets/piz.png',
      alt: 'Margherita',
      title: 'Margherita',
      description: 'Our chefs start with a thin, crispy crust, carefully topped with San Marzano tomato sauce, fresh mozzarella cheese, and a drizzle of extra virgin olive oil.'
    },
    {
      src: 'assets/tbk.png',
      alt: 'tteokbokki',
      title: 'Tteokbokki',
      description: 'Savor the bold, spicy flavors of chewy rice cakes in a savory gochujang sauce, topped with vegetables and fish cakes for a perfect balance of texture and taste.'
    },
  ];

  navigate(direction: number): void {
    this.currentIndex = (this.currentIndex + direction + this.good_deals.length) % this.good_deals.length;
  }

  on_get_it() {
    this.router.navigate(['/search']);
  }

}
