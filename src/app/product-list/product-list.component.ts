import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  searchUrl = "http://www.google.com";
  name = "test";

  addToKartCount = 0;
  maxProductValue = 5;
  product = {
    imageUrl: '../../assets/iphone.jpeg',
    name: "Iphone 15",
    price: 12000,
    color: "Black",
    discount: 16,
    available: true,
  }

  onNameChange(event: any) {
    console.log(event);
    this.name = event.target.value;
  }

  onCountIncrease() {
    this.addToKartCount++;
  }

  onCountDecrease(event: any) {
    console.log(event);
    this.addToKartCount = this.addToKartCount > 0 ? this.addToKartCount - 1 : 0
  }
}
