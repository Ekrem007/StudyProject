import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { NgModule, Component } from '@angular/core';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { ProductSearchByNameContainsComponent } from './components/product-search-by-name-contains/product-search-by-name-contains.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryComponent } from './components/category/category.component';



export const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    {path:"", pathMatch:"full", component:ProductComponent},
    {path:"products", component:ProductComponent},
    {path:"products/category/:categoryId", component:ProductComponent},
    {path:"products/add", component:ProductAddComponent},
    {path:"login", component:LoginComponent},
    {path:"products/search", component:ProductSearchByNameContainsComponent},
    {path:"category/add", component:CategoryAddComponent},
    {path:"category", component:CategoryComponent},
    {
        path: "communication",component: CommunicationComponent,data: { layout: 'simple' }  
    }

    
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
     
    
})
export class AppRoutingModule{}
