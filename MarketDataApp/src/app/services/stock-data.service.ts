import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';


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
  constructor(private http: HttpClient) {}

  getCompanyAllData(comapnyName: string): Observable<string[]> {
    const urlPath: string = "auto-complete?q=";
    const fullUrl = this.baseUrl + urlPath + comapnyName;
    return this.http.get<string[]>(fullUrl, httpOptions);
}
   getCompanyStatisctiData(comapnyName: string): Observable<string[]> {
      const urlPath: string = "stock/v2/get-statistics?symbol=";
      const fullUrl = this.baseUrl + urlPath + comapnyName;
      return this.http.get<string[]>(fullUrl, httpOptions);
  }

  getOnlyNeededData(comapnyName: string): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + comapnyName, httpOptions);
}
}
