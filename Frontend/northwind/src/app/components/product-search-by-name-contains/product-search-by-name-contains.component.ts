import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { VatAddedPipe } from '../../pipes/vat-added.pipe';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResponseModel } from '../../models/responseModel';
import { response } from 'express';

@Component({
  selector: 'app-product-search-by-name-contains',
  standalone: true,
  imports: [CommonModule,VatAddedPipe,FormsModule,FilterPipePipe,],
  templateUrl: './product-search-by-name-contains.component.html',
  styleUrl: './product-search-by-name-contains.component.css'
})
export class ProductSearchByNameContainsComponent implements OnInit {

  ngOnInit(): void {
    this.getProductsByNameContains
    this.deleteProduct
    this.addToCart
  }

  products:Product[] = [];
  dataLoaded= false;
  filterText='';
  productName= "";

  constructor( private productService:ProductService, private activatedRoute:ActivatedRoute,private toastrService:ToastrService,
    private cartService:CartService){}

    addToCart(product: Product) {
      this.toastrService.success("Ürün eklendi", product.productName); 
      this.cartService.addToCart(product);
    }
    deleteProduct(productId: number): void {
      if (confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
        this.productService.delete(productId).subscribe({
          next: (response: ResponseModel) => {
            if (response.success) {
              this.products = this.products.filter(product => product.id !== productId);
              alert('Ürün başarıyla silindi.');
            } else {
              alert('Ürün silinemedi.');
            }
          },
          error: (error: any) => {
            console.error('Error deleting product', error);
            alert('Ürün silinirken bir hata oluştu.');
          }
        });
      }
    }
    getProductsByNameContains(productName: string) {
      this.productService.getProductsByNameContains(productName).subscribe(response => {
        if(response.data.length === 0){
          this.toastrService.warning("isimli ürün yoktur",productName)

        }else{
          this.products = response.data;
          this.dataLoaded = true;
          this.toastrService.success("ürünler geldi")

        }

        
      });
    }
    

}
