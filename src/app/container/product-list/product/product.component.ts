import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  product: {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
      rate: number,
      count: number,
    },
    is_in_invetory?: boolean
  } = {
      id: 0,
      title: "",
      price: 0,
      description: '',
      category: "",
      image: "",
      rating: {
        rate: 0,
        count: 0,
      },
      is_in_invetory: false

    };
}
