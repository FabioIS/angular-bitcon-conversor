import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {

  constructor(private _http: HttpClient) {
  }

  // Get currency in USD, euros and pounds
  getCurrency() {
    return this._http.get<any>('https://api.coindesk.com/v1/bpi/currentprice.json');
  }

  getCNYCurrency() {
    return this._http.get<any>('https://api.coindesk.com/v1/bpi/currentprice/CNY.json');
  }

  // Get exchange price evolution in the given days
  async getHistoricConversion(startDate: string, endDate: string) {
    console.log('https://api.coindesk.com/v1/bpi/historical/close.json?start=' + startDate + '&end=' + endDate);
    return await this._http.get<any>
    ('https://api.coindesk.com/v1/bpi/historical/close.json?start=' + startDate + '&end=' + endDate).toPromise();
  }
}
