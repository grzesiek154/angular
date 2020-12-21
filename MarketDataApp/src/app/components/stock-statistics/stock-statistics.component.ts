import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
      this.mapRequestDataToTuple(data).forEach((key, val) => {
        console.log("key: " + key, " val: " + val);
      });
    });
  }
  private mapRequestDataToTuple(data): [string, number] {
    type Tuple = [string, number];
    let companyStat: Tuple;

    companyStat = ['previousClose', data.summaryDetail['previousClose']['raw']];
    companyStat.push('regularMarketOpen', data.summaryDetail['regularMarketOpen']['raw']);
    companyStat.push('trailingPE', data.summaryDetail['trailingPE']['raw']);
    companyStat.push('trailingEps', data['defaultKeyStatistics']['trailingEps']['raw']);
    companyStat.push('regularMarketVolume', data.summaryDetail['regularMarketVolume']['raw']);
    companyStat.push('dividendRate', data.summaryDetail['dividendRate']['raw']);

    return companyStat;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }


}
