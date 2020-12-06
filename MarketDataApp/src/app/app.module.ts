import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockStatisticsComponent } from './components/stock-statistics/stock-statistics.component';
import { StockFinancialsComponent } from './components/stock-financials/stock-financials.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyMainComponent } from './components/company-main/company-main.component';

@NgModule({
  declarations: [
    AppComponent,
    StockStatisticsComponent,
    StockFinancialsComponent,
    CompanyMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
