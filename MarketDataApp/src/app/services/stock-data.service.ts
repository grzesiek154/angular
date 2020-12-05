import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, observable, Observable, of } from 'rxjs';
import { CompanyData } from '../models/CompanyData';


const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'x-rapidapi-key': '82f0b2cc09msh98c75f01f6b77e8p1be80bjsn0245d9601941',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  )
}

@Injectable({
  providedIn: 'root'
})

export class StockDataService {

  baseUrl: string = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/";
  constructor(private http: HttpClient) { }

  getCompanyAllData(comapnyName: string): Observable<CompanyData> {
    const urlPath: string = "auto-complete?q=";
    const fullUrl = this.baseUrl + urlPath + comapnyName;
    return this.http.get<CompanyData>(fullUrl, httpOptions);
  }

  getCompanySymbol(comapnyName: string): Observable<CompanyData> {
    const urlPath: string = "auto-complete?q=";
    const fullUrl = this.baseUrl + urlPath + comapnyName;
    return this.http.get<CompanyData>(fullUrl, httpOptions);
  }
  getCompanyStatisctiData(symbol: string): Observable<CompanyData> {
    const urlPath: string = "stock/v2/get-statistics?symbol=";
    const fullUrl = this.baseUrl + urlPath + symbol;
    return this.http.get<CompanyData>(fullUrl, httpOptions);
  }


}
