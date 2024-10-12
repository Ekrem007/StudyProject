  import { HttpClient } from '@angular/common/http';
  import { LoginModel } from './../models/loginModel';
  import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    

    apiUrl = "http://localhost:8080/api/users/";

    constructor(private httpClient:HttpClient) { }

    login(loginModel:LoginModel){
      return this.httpClient.post<ResponseModel>(this.apiUrl + "login", loginModel);
    }
    isAuthenticated(){
      if(localStorage.getItem("token")){
        return false;
      }else{
        return false;
      }
      

    
    
    }
  }


