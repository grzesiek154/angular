import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SliderComponent } from './components/slider/slider.component';
import { OffertComponent } from './components/offert/offert.component';
import { GalleryComponent } from './components/gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderComponent,
    OffertComponent,
    GalleryComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
