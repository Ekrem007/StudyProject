import { LoginModel } from './../../models/loginModel';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, ReactiveFormsModule, Validators,  } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ResponseModel } from '../../models/responseModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private authService:AuthService, private toastrService:ToastrService,private router:Router){}

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })

  }
  login() {
    if (this.loginForm.valid) {
        let loginModel = Object.assign({}, this.loginForm.value);
        console.log(loginModel);
        this.authService.login(loginModel).subscribe({
            next: (response: ResponseModel) => {
               
                if (response.success) {
                    this.toastrService.info(response.message);
                    console.log("Login successful: " + response.message);
                    this.router.navigate(["/products"]);
                } else {
                    console.log("Login failed: " + response.message);
                }
            },
            error: (error) => {
                console.log("Bir hata oluştu: ", error);
            }
        });
    }
}

   
  
}

