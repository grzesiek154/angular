import { Component, OnInit } from '@angular/core';
import { ListedCompany } from '../../models/ListedCompany';
import { StockDataService } from 'src/app/services/stock-data.service';

@Component({
  selector: 'app-company-main',
  templateUrl: './company-main.component.html',
  styleUrls: ['./company-main.component.css'],
  providers: [StockDataService]
})
export class CompanyMainComponent implements OnInit {
  selectedSymbol: string;
  listedCompany: ListedCompany;
  companyStat: number[];
  companySymbols: string[] = [];
  nextSymbol = 0;

  constructor(private stockDataService: StockDataService){}

  ngOnInit(): void {
  }

  getComapnySymbols() {
    this.stockDataService.getAllListedCompanies("Apple").subscribe(data => {
      data.quotes.forEach(data => {
        this.listedCompany = data;
        this.companySymbols.push(this.listedCompany.symbol);
        console.log(this.listedCompany.symbol);
      });
    });
  }

  announceSymbol(symbol) {
    const symbolToAnnounce = symbol;
    this.stockDataService.announce(symbolToAnnounce);
  }

}
