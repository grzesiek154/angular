import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CompanyStatistics } from 'src/app/models/CompanyStatistics';
import { StockDataService } from 'src/app/services/stock-data.service';
import { ListedCompany } from '../../models/ListedCompany';

@Component({
  selector: 'app-stock-statistics',
  templateUrl: './stock-statistics.component.html',
  styleUrls: ['./stock-statistics.component.css']
})
export class StockStatisticsComponent implements OnInit {
  @Input() currentSymbol: string;
  //fundamentalData: [string, number];
  subscription: Subscription;
  announced = true;
  confirmed = false;

  constructor(private stockDataService: StockDataService) {
    this.startSubscription();
   }

  ngOnInit(): void { 
    this.stockDataService.getCompanyStatisctiData(this.currentSymbol).subscribe(data => {
      console.log(data.summaryDetail)
    })
  }


  private startSubscription() {
    this.subscription = this.stockDataService.symbolAnnounced$.subscribe(subscribedSymbol => {
      this.currentSymbol = subscribedSymbol;
      console.log(this.currentSymbol);
      this.announced = true;
      this.confirmed = false;
    });
  }
  confirm() {
    this.confirmed = true;
    this.stockDataService.confirm(this.currentSymbol);
  }

  getFundamentalData(): void {
  this.stockDataService.getTapedStatistics(this.currentSymbol).forEach((key, val) => {
    console.log("keyL: " + key, "val: " + val)
  });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

    // getCompanyStatics(symbol: string): void {
  //   this.stockDataService.getCompanyStatisctiData(symbol).subscribe(data => {
  //     this.companyStat.push(this.companyStatistics.previousClose = data.summaryDetail['previousClose']['raw']);
  //     this.companyStat.push(this.companyStatistics.regularMarketOpen = data.summaryDetail['regularMarketOpen']['raw']);
  //     this.companyStat.push(this.companyStatistics.trailingPE = data.summaryDetail['trailingPE']['raw']);
  //     this.companyStat.push(this.companyStatistics.trailingEPS = data['defaultKeyStatistics']['trailingEps']['raw']);
  //     this.companyStat.push(this.companyStatistics.regularMarketVolume = data.summaryDetail['regularMarketVolume']['raw']);
  //     this.companyStat.push(this.companyStatistics.dividendRate = data.summaryDetail['dividendRate']['raw']);
  //     // this.companyStatistics.previousClose = data
  //   });
  // }


}
