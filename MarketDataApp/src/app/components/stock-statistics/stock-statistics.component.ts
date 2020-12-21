import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CompanyStatistics } from 'src/app/models/CompanyStatistics';
import { StockDataService } from 'src/app/services/stock-data.service';


@Component({
  selector: 'app-stock-statistics',
  templateUrl: './stock-statistics.component.html',
  styleUrls: ['./stock-statistics.component.css']
})
export class StockStatisticsComponent implements OnInit {
  @Input() currentSymbol: string;
  private subscription: Subscription;
  private announced = true;


  constructor(private stockDataService: StockDataService) {
    this.startSubscription();
  }

  ngOnInit(): void {

  }

  private startSubscription() {
    this.subscription = this.stockDataService.symbolAnnounced$.subscribe(subscribedSymbol => {
      this.currentSymbol = subscribedSymbol;
      console.log(this.currentSymbol);
      this.announced = true;
    });
  }
  getFundamentalData(): void {
    this.stockDataService.getFundamentalStatisticsFromApi(this.currentSymbol).subscribe(data => {
      console.log("Previous Close " + this.mapRequestDataToTuple(data).previousClose); 
      console.log("Regular Market Open " + this.mapRequestDataToTuple(data).regularMarketOpen); 
      
    });
  }
  private mapRequestDataToTuple(data): CompanyStatistics {
    
   let companyFundamentalStat = new CompanyStatistics();

    companyFundamentalStat.previousClose = data.summaryDetail['previousClose']['raw'];
    companyFundamentalStat.regularMarketOpen = data.summaryDetail['regularMarketOpen']['raw'];
    companyFundamentalStat.dividendRate = data.summaryDetail['dividendRate']['raw'];
    companyFundamentalStat.regularMarketVolume = data.summaryDetail['regularMarketVolume']['raw'];
    companyFundamentalStat.trailingEPS = data['defaultKeyStatistics']['trailingEps']['raw'];
    companyFundamentalStat.trailingPE = (data.summaryDetail['trailingPE'] ? data.summaryDetail['trailingPE']['raw'] : "Not provided");


    return companyFundamentalStat;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }


}
