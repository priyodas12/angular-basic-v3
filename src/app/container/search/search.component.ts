import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = ""

  @ViewChild('serachInput', {}) searchInputElementRef!: ElementRef;

  @Output()
  searchTextDataChanged = new EventEmitter<string>();

  onSearchText(event: any) {
    console.log(event);
    this.searchText = event.target.value;
  }

  onSearchDataInput() {
    console.log(this.searchInputElementRef.nativeElement.value);
    this.searchText = this.searchInputElementRef.nativeElement.value;
    this.searchTextDataChanged.emit(this.searchText);
  }
}
