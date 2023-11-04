import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  selectedFilterRadioBtn: string = 'all';

  @Output()
  selectedRadioBtnChange = new EventEmitter<string>();

  onChangeRadioInput() {
    //this.selectedFilterRadioBtn = event.target.value;
    //console.log(this.selectedFilterRadioBtn);
    this.selectedRadioBtnChange.emit(this.selectedFilterRadioBtn);
    //console.log("event raised!");
  }
}
