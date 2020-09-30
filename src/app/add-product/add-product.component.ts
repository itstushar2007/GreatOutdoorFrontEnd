import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { AddProductService } from '../add-product.service'


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

product: Product=new Product("","","","","","",0,0);
message:any

  constructor(private service:AddProductService) { }

  ngOnInit(): void {
  }


  public addProductNow(){

   let resp = this.service.addProduct(this.product);
   resp.subscribe((data)=>this.message=data);


  }
}
