import { Component } from '@angular/core';
import { TabBarViewComponent } from '../../views/tab-bar-view/tab-bar-view.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discount-screen',
  imports: [TabBarViewComponent],
  templateUrl: './discount-screen.component.html',
  styleUrl: './discount-screen.component.scss'
})
export class DiscountScreenComponent {

  constructor(private router: Router) { }

  on_get_it() {
    this.router.navigate(['/product']);
  }

}
