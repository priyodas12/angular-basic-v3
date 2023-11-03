import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMemuComponent } from './header/main-memu/main-memu.component';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { DisplayGreyDirective } from './directives/display-grey.directive';
import { DisplayGreenDirective } from './directives/display-green.directive';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, TopHeaderComponent, TopMenuComponent, MainMemuComponent, SearchBarComponent, ContainerComponent, SearchComponent, DisplayGreyDirective, DisplayGreenDirective
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
