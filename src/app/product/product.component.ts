import { Component } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService] //servisi local hale getirdik
})
export class ProductComponent {
  constructor(
     private productService:ProductService,
     private activatedRoute:ActivatedRoute) { }
  title = "Ürünler";
  filterText = "";
  products: Product[] = [];
 


  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe((data: Product[])=> {
        this.products = data
        });
    })

   
  }

  /*addToCard(product: {name:string }) { 
   //product parametresinin bir nesne olduğunu ve name özelliğine sahip olduğunu belirtmeyince hata verdi
   this.alertifyService.success(product.name +"added")
  }*/
  addToCard(product: { name: string }) {
    alert("sepete eklendi: " + product.name);
  }
}
