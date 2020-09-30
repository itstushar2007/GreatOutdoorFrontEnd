import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http:HttpClient) { }

  public addProduct(product){
    return this.http.post("http://localhost:9500/product/addProduct",product,{responseType: 'text' as 'json'});
  }
}
