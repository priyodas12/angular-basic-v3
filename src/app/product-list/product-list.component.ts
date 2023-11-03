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
  product = {
    imageUrl: '../../assets/iphone.jpeg',
    name: "Iphone 15",
    price: 12000,
    color: "Black",
    discount: 16,
    available: true,
  }

  onNameChange() {
    this.name = "john"
  }
}
