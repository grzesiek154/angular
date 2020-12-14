import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, observable, Observable, of, Subject } from 'rxjs';
import { CompanyData } from '../models/CompanyData';
import { ListedCompany } from '../models/ListedCompany';
import { catchError, map, tap } from 'rxjs/operators';


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

  private companyStat: [string, number] = ["test", 1];
  baseUrl: string = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/";
  private symbolAnnouncedSource = new Subject<string>();
  private symbolConfirmedSource = new Subject<string>();
  constructor(private http: HttpClient) { }

  symbolAnnounced$ = this.symbolAnnouncedSource.asObservable();
  symbolConfirmed$ = this.symbolConfirmedSource.asObservable();



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

  getTapedStatistics(symbol : string): [string, number]{
    this.getCompanyStatisctiData(symbol);
    return this.companyStat;
  }

  getCompanyStatisctiData(symbol: string): Observable<CompanyData> {
    const urlPath: string = "stock/v2/get-statistics?symbol=";
    const fullUrl = this.baseUrl + urlPath + symbol;
    return this.http.get<CompanyData>(fullUrl, httpOptions).pipe(
      tap(data => {
        this.companyStat.push('previousClose', data.summaryDetail['previousClose']['raw']);
        this.companyStat.push('regularMarketOpen', data.summaryDetail['regularMarketOpen']['raw']);
        this.companyStat.push('trailingPE', data.summaryDetail['trailingPE']['raw']);
        this.companyStat.push('trailingEps',data['defaultKeyStatistics']['trailingEps']['raw']);
        this.companyStat.push('regularMarketVolume',data.summaryDetail['regularMarketVolume']['raw']);
        this.companyStat.push('dividendRate', data.summaryDetail['dividendRate']['raw']);
      }),
      catchError(this.handleError<CompanyData>('getCompanyStatisctiData'))
    );
  }

      /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error);

    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);

  }
}

announce(symbol: string) {
  this.symbolAnnouncedSource.next(symbol);
  }

  confirm(symbol: string) {
    this.symbolConfirmedSource.next(symbol);
  }
}
