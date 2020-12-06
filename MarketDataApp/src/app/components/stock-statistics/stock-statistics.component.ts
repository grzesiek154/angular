import { Component, Input, OnInit } from '@angular/core';
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
  fundamentalData: [string, number];
  constructor(private stockDataService: StockDataService) { }

  ngOnInit(): void {

  }

  getFundamentalData(): void {
  this.fundamentalData =  this.stockDataService.getTapedStatistics(this.currentSymbol);
  this.fundamentalData.forEach((key, val) => {
    console.log("keyL: " + key, "val: " + val)
  });
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
