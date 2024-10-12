import { category } from './../../models/category';
import { CartService } from './../../services/cart.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { ActivatedRoute } from '@angular/router';
import { VatAddedPipe } from '../../pipes/vat-added.pipe';
import { FormsModule} from '@angular/forms';
import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';
import { ResponseModel } from '../../models/responseModel';
import { CategoryService } from '../../services/category.service';




@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,VatAddedPipe,FormsModule,FilterPipePipe,],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
 
 
  products:Product[] = [];
  dataLoaded= false;
  filterText='';
  
  

  

 
    
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute,private toastrService:ToastrService,
    private cartService:CartService){}
    

ngOnInit():void{
  this.activatedRoute.params.subscribe(params=>{
    if (params["categoryId"]){
      this.getProductsbyCategory(params["categoryId"])
    }
    else{
      this.getProducts()
    }
  })

}

getProducts(){
  this.productService.getProducts().subscribe(response=>{
   this.products= response.data
   this.dataLoaded=true;

  })  
  

}
getProductsbyCategory(categoryId:number){
  this.productService.getProductsByCategory(categoryId).subscribe(response=>{
   this.products= response.data
   this.dataLoaded=true;

  })  
  

}
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
}