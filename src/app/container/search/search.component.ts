import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = ""

  @Output()
  searchTextDataChanged = new EventEmitter<string>();

  onSearchText(event: any) {
    console.log(event);
    this.searchText = event.target.value;
  }

  onSearchDataInput(event: any) {
    this.searchText = event.target.value;
    this.searchTextDataChanged.emit(this.searchText);
  }
}
