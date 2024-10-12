export interface Product{
    id:number;
    productName:string;
    unitPrice:number;
    unitsInStock:number;
    quantityPerUnit:string;
    category:{
        categoryId:number;
        categoryName:string;
    }
    
    
    

}