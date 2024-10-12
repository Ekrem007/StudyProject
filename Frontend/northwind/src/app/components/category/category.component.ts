import { CategoryService } from './../../services/category.service';
import { category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResponseModel } from '../../models/responseModel';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterModule,FontAwesomeModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  categories: category[]=[];
  currentCategory: category;


  constructor(private CategoryService:CategoryService){}

  ngOnInit(): void {
    this.getCategories();
    
  }
  
  getCategories(){
    this.CategoryService.getCategories().subscribe(response=>{
     this.categories= response.data
     
  
    })

}
setCurrentCategory(category:category){
  this.currentCategory= category;

      
}
getCurrentCategoryClass(category:category){
  if(category == this.currentCategory){
    return "list-group-item active"

  }
  else{
    return "list-group-item "

  }

}

getAllCategoryClass(){
  if(!this.currentCategory)
    return "list-group-item active"
  else{
    return "list-group-item "

  }

  
}
deleteCategory(categoryId: number): void {
  if (confirm('Bu kategoriyi silmek istediğinizden emin misiniz?')) {
    this.CategoryService.deleteCategory(categoryId).subscribe({
      next: (response: ResponseModel) => {
        if (response.success) {
          // Kategoriyi listeden çıkar
          this.categories = this.categories.filter(category => category.categoryId !== categoryId);
          // Mevcut kategoriyi temizle
          if (this.currentCategory && this.currentCategory.categoryId === categoryId) {
            this.currentCategory = null;
          }
          alert('Kategori başarıyla silindi.');
        } else {
          alert('Kategori silinemedi.');
        }
      },
      error: (error: any) => {
        console.error('Kategori silme hatası:', error);
        alert('Kategori silinirken bir hata oluştu.');
      }
    });
  }
}
}
