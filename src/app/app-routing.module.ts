import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { SearchDeleteProductComponent } from './search-delete-product/search-delete-product.component';


const routes: Routes = [

  {path:"add",component:AddProductComponent},
  {path:"search",component:SearchDeleteProductComponent},
  {path:"",redirectTo:"add",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
