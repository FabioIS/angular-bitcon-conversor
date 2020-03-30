import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CurrencyServiceService} from '../services/currency-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  USDCurrency: string;
  GBPCurrency: string;
  EURCurrency: string;
  CNYCurrency: string;

  constructor(private _currencyService: CurrencyServiceService) {
  }


  // Retrieve data from the service and format it
  ngOnInit(): void {
    this._currencyService.getCurrency().subscribe(
      data => {
        this.USDCurrency = parseFloat(data.bpi.USD.rate.replace(',', '')).toFixed(2);
        this.GBPCurrency = parseFloat(data.bpi.GBP.rate.replace(',', '')).toFixed(2);
        this.EURCurrency = parseFloat(data.bpi.EUR.rate.replace(',', '')).toFixed(2);
      },
      error => error.message
    );
    this._currencyService.getCNYCurrency().subscribe(
      data => {
        this.CNYCurrency = parseFloat(data.bpi.CNY.rate.replace(',', '')).toFixed(2);
      },
      error => error.message
    );
  }


}
