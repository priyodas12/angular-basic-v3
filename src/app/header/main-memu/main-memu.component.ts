import { Component } from '@angular/core';

@Component({
  selector: 'app-main-memu',
  templateUrl: './main-memu.component.html',
  styleUrls: ['./main-memu.component.css']
})
export class MainMemuComponent {
  mainMemuItems = ['Home', 'Products', 'Offers', 'About', 'Contact Us']
}
