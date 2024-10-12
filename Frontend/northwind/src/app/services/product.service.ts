import { ResponseModel } from './../models/responseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="http://localhost:8080/api/products"
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl+"/getall")
  
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl+"/getByCategoryId?categoryId="+categoryId)
  
  }
  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/add",product)

  }
  delete(productId: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + "/deletebyid?productId=" + productId);

  }
  getProductsByNameContains(productName:string):Observable<ListResponseModel<Product>>{
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl+"/getByProductNameContains?productName=" + productName);

}


  
}
