import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input()
  allProducts: number = 0;

  @Input()
  inStockProducts: number = 0;

  @Input()
  outOfStockProducts: number = 0;

}
