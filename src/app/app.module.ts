import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMemuComponent } from './header/main-memu/main-memu.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent, TopHeaderComponent, TopMenuComponent, MainMemuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
