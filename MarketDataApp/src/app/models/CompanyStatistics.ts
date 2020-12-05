export class CompanyStatistics {

  private _previousClose: number;
  private _regularMarketOpen: number;
  private _trailingPE: number;
  private _trailingEPS: number;
  private _regularMarketVolume: number;
  private _dividendRate: number;


  get previousClose(): number {
    return this._previousClose;
  }

  get regularMarketOpen(): number {
    return this._regularMarketOpen;
  }

  get trailingPE(): number {
    return this._trailingPE;
  }

  get trailingEPS(): number {
    return this._trailingEPS;
  }

  get regularMarketVolume(): number {
    return this._regularMarketVolume;
  }
  get dividendRate(): number {
    return this._dividendRate;
  }

  set previousClose(rate: number) {
    if (rate != null) {
      this._previousClose = rate;
    }
  }
  set regularMarketOpen(rate: number) {
    if (rate != null) {
      this._regularMarketOpen = rate;
    }
  }
  set trailingPE(rate: number) {
    if (rate != null) {
      this._trailingPE = rate;
    }
  }

  set regularMarketVolume(rate: number) {
    if (rate != null) {
      this._regularMarketVolume = rate;
    }
  }

  set trailingEPS(rate: number) {
    if (rate != null) {
      this._trailingEPS = rate;
    }
  }

  set dividendRate(rate: number) {
    if (rate != null) {
      this._dividendRate = rate;
    }
  }
}