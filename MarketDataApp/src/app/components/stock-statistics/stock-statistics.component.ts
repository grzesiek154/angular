import { Component, OnInit } from '@angular/core';
import { StockDataService } from 'src/app/services/stock-data.service';

@Component({
  selector: 'app-stock-statistics',
  templateUrl: './stock-statistics.component.html',
  styleUrls: ['./stock-statistics.component.css']
})
export class StockStatisticsComponent implements OnInit {

  constructor(private stockDataService: StockDataService) { }

  ngOnInit(): void {
  }

  getComapnyData(): void {
    this.stockDataService.getCompanyAllData("Apple").subscribe(data => {
      console.log(data);
    });
  }

  getCompanyStatiscs(): void {
    this.stockDataService.getCompanyStatisctiData("APPLE").subscribe(data => {
      console.log(data[1]);
    });
  }
}
