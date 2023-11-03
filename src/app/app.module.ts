import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMemuComponent } from './header/main-memu/main-memu.component';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './product-list/search/search.component';
import { FormsModule } from '@angular/forms';
import { DisplayGreyDirective } from './product-list/display-grey.directive';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, TopHeaderComponent, TopMenuComponent, MainMemuComponent, SearchBarComponent, ProductListComponent, SearchComponent, DisplayGreyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
