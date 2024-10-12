import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { category } from '../../models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;
  categories: category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
    this.getCategories(); 
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ["", Validators.required],
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required],
      quantityPerUnit: ["", Validators.required],
      categoryId: ["", Validators.required] 
    });
  }

  add() {
    if (this.productAddForm.valid) {
      const productModel = this.productAddForm.value;
      this.productService.add(productModel).subscribe({
        next: response => this.toastrService.show(response.message, "Dikkat"),
        error: responseError => this.toastrService.show(responseError.error, "Hata")
      });
    } else {
      this.toastrService.show("Formunuz eksik.", "Dikkat");
    }
  }

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: response => this.categories = response.data,
      error: error => this.toastrService.error("Kategoriler alınamadı.", "Hata")
    });
  }
}
