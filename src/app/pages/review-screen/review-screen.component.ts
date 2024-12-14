import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-review-screen',
  templateUrl: './review-screen.component.html',
  styleUrls: ['./review-screen.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, MatCardModule]
})
export class ReviewScreenComponent {

  good_deals = [
    { src: 'assets/icecream.jpg', alt: 'icecream', title: 'Free Ice Cream' },
    { src: 'assets/pizza.png', alt: 'pizza', title: '20% off Margherita' },
    { src: 'assets/tteokbokki.png', alt: 'tteokbokki', title: '30% off Tteokbokki' },
  ];

}
