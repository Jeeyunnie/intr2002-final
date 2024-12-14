import { Routes } from '@angular/router';
import { OutnAboutScreenComponent } from './pages/outn-about-screen/outn-about-screen.component';
import { DiscountScreenComponent } from './pages/discount-screen/discount-screen.component';
import { SearchComponent } from './pages/search/search.component';
import { CommunityScreenComponent } from './pages/community-screen/community-screen.component';
import { MyPageScreenComponent } from './pages/my-page-screen/my-page-screen.component';
import { ProductScreenComponent } from './pages/product-screen/product-screen.component';

export const routes: Routes = [
  { path: '', component: OutnAboutScreenComponent },
  { path: 'discount', component: DiscountScreenComponent },
  { path: 'search', component: SearchComponent },
  { path: 'product', component: ProductScreenComponent },
  { path: 'community', component: CommunityScreenComponent },
  { path: 'my-page', component: MyPageScreenComponent }
]