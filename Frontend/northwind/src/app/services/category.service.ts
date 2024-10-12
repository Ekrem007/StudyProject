import { category } from './../models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel'; 
import { ResponseModel } from '../models/responseModel';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl="http://localhost:8080/api/categories"
  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListResponseModel<category>>{
    return this.httpClient.get<ListResponseModel<category>>(this.apiUrl+"/getall")
  
  }
  addCategory(category:category):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/add",category)

  }
  deleteCategory(categoryId: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + "/delete?categoryId="+categoryId);
  }
}

