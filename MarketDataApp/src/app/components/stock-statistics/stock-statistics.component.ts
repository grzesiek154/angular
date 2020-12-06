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
}
