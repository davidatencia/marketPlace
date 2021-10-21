import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HistoryComponent } from './pages/history/history.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { PaymentMethodsComponent } from './pages/payment-methods/payment-methods.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'shopping', component: ShoppingComponent },
      { path: 'payment-methods', component: PaymentMethodsComponent },
      { path: 'product-details', component: ProductDetailComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
    ],
  },

  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
