import { Component } from '@angular/core';
import { CartSummaryComponent } from "../cart-summary/cart-summary.component";
import { ProductAddComponent } from "../product-add/product-add.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [CartSummaryComponent, ProductAddComponent,RouterLink],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent {
  constructor(private router:Router){}

  navigateToProductAdd() {
    this.router.navigate(['/products/add']);
  }

}
