import { ProductComponent } from './components/product/product.component';
import { NaviComponent } from './components/navi/navi.component';
import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { HttpClientModule } from '@angular/common/http';

import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';

import { CartService } from './services/cart.service';
import { FormBuilder, FormControl, FormGroup, FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faTrash, faTrashAlt} from '@fortawesome/free-solid-svg-icons'






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NaviComponent,CategoryComponent,ProductComponent,
    HttpClientModule,FormsModule,ReactiveFormsModule,],
  providers: [ProductService,CategoryService,CartService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'northwind';
  user: string = 'Ekrem Arda Uğur';

  constructor(private router: Router) {}
  icon=faTrash;

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

}

