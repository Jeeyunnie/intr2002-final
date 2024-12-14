import { Component } from '@angular/core';
import { TabBarViewComponent } from "../../views/tab-bar-view/tab-bar-view.component";
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-my-page-screen',
  imports: [MatCardModule, TabBarViewComponent, CommonModule],
  templateUrl: './my-page-screen.component.html',
  styleUrl: './my-page-screen.component.scss'
})
export class MyPageScreenComponent {

  name = 'Jeeyun Jung';

  my_activities = [
    { src: 'assets/evergreen-brick-works.jpg', alt: 'evergreen-brick-works', title: 'Evergreen Brick Works' },
    { src: 'assets/summer-hill.jpg', alt: 'summer-hill', title: 'Summer Hill' },
  ];

  display_fisrt_char(name: string) {
    return name.charAt(0);
  }
}
