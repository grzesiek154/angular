import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HerosComponent } from './heros/heros.component';

// First, AppRoutingModule imports RouterModule and Routes so the app can have routing functionality. The next import, HeroesComponent, will give the Router somewhere to go once you configure the routes.
const routes: Routes = [
  { path: 'heroes', component: HerosComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent}
  // The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
//   This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
// After the browser refreshes, the router loads the DashboardComponent and the browser address bar shows the /dashboard URL.

//  Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// RouterModule.forRoot()
// The @NgModule metadata initializes the router and starts it listening for browser location changes.
// The following line adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot():

// Next, AppRoutingModule exports RouterModule so it will be available throughout the app.

export class AppRoutingModule { }
