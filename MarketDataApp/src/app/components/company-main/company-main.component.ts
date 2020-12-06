import { Component, OnInit } from '@angular/core';
import { ListedCompany } from '../../models/ListedCompany';
import { CompanyStatistics } from '../../models/CompanyStatistics';
import { StockDataService } from 'src/app/services/stock-data.service';

@Component({
  selector: 'app-company-main',
  templateUrl: './company-main.component.html',
  styleUrls: ['./company-main.component.css']
})
export class CompanyMainComponent implements OnInit {
  listedCompany: ListedCompany;
  companyStatistics: CompanyStatistics = new CompanyStatistics();
  companySymbols: string[] = [];

  constructor(private stockDataService: StockDataService) { }

  ngOnInit(): void {
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
    this.stockDataService.getCompanyStatisctiData(symbol).subscribe(data => {
      this.companyStatistics.previousClose = data.summaryDetail['previousClose']['raw'];
      this.companyStatistics.regularMarketOpen = data.summaryDetail['regularMarketOpen']['raw'];
      this.companyStatistics.trailingPE = data.summaryDetail['trailingPE']['raw'];
      this.companyStatistics.trailingEPS = data['defaultKeyStatistics']['trailingEps']['raw'];
      this.companyStatistics.regularMarketVolume = data.summaryDetail['regularMarketVolume']['raw'];
      this.companyStatistics.dividendRate = data.summaryDetail['dividendRate']['raw'];
      // this.companyStatistics.previousClose = data
    });
  }
}
