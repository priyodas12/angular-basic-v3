import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  name:string="Iphone 15";
  price:number=12000;
  color:string="Black";
  discount:number=16;
}
