import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SliderComponent } from './components/slider/slider.component';
import { OffertComponent } from './components/offert/offert.component';
// import { GalleryComponent } from './components/gallery/gallery.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component: SliderComponent},
  {path: 'ofert', component: OffertComponent},
  // {path: 'gallery', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
