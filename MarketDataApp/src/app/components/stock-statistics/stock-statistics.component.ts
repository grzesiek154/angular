import { Component, OnInit } from '@angular/core';
import { CompanyStatistics } from 'src/app/models/CompanyStatistics';
import { StockDataService } from 'src/app/services/stock-data.service';
import { ListedCompany } from '../../models/ListedCompany';

@Component({
  selector: 'app-stock-statistics',
  templateUrl: './stock-statistics.component.html',
  styleUrls: ['./stock-statistics.component.css']
})
export class StockStatisticsComponent implements OnInit {
  listedCompany: ListedCompany;
  companyStatistics: CompanyStatistics = new CompanyStatistics();
  companySymbols: string[] = [];
  selectedSymbol: string;
  constructor(private stockDataService: StockDataService) { }

  ngOnInit(): void {

  }

  getComapnyData(): void {
    this.stockDataService.getCompanyAllData("Apple").subscribe(data => {
      data.quotes.forEach(obj => {
        console.log(obj);
      });
    });
  }

  getComapnySymbol() {
    this.stockDataService.getCompanyAllData("Apple").subscribe(data => {
      data.quotes.forEach(data => {
        this.listedCompany = data;
        this.companySymbols.push(this.listedCompany.symbol);
        console.log(this.listedCompany.symbol);
      });
    });
  }

  getCompanyStatics(symbol: string): void {
    this.selectedSymbol = symbol;
    console.log(this.selectedSymbol);
    this.stockDataService.getCompanyStatisctiData(symbol).subscribe(data => {
      this.companyStatistics.previousClose = data.summaryDetail['previousClose']['raw'];
      this.companyStatistics.regularMarketOpen = data.summaryDetail['regularMarketOpen']['raw'];
      this.companyStatistics.trailingPE = data.summaryDetail['trailingPE']['raw'];
      this.companyStatistics.trailingEPS = data['defaultKeyStatistics']['trailingEps']['raw'];
      this.companyStatistics.regularMarketVolume = data.summaryDetail['regularMarketVolume']['raw'];
      this.companyStatistics.dividendRate = data.summaryDetail['dividendRate']['raw'];
      // this.companyStatistics.previousClose = data
      console.log(this.companyStatistics.previousClose);
      console.log(this.companyStatistics.regularMarketOpen);
      console.log(this.companyStatistics.trailingPE);
      console.log(this.companyStatistics.trailingEPS);
      console.log(this.companyStatistics.regularMarketVolume);
      console.log(this.companyStatistics.dividendRate);
    });
  }
}
