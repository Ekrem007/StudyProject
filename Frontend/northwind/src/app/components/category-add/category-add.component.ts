import { category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../services/category.service';
import { response } from 'express';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent implements OnInit {

  categoryAddForm: FormGroup

  constructor(private formBuilder: FormBuilder,private toastrService:ToastrService,private categoryService: CategoryService) {}
    
    ngOnInit(): void {
      this.createCategoryAddForm();
      
    }

    createCategoryAddForm(){
      this.categoryAddForm = this.formBuilder.group({

        categoryName: ["",Validators.required],
      })

    }
    add(){
      if(this.categoryAddForm.valid){
        const categoryModel = this.categoryAddForm.value;
        this.categoryService.addCategory(categoryModel).subscribe({
          next: response => this.toastrService.show(response.message, "Dikkat"),
          error: responseError => this.toastrService.show(responseError.error, "Hata")
        })


      }

    }



 

}
