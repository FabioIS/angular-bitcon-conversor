import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css']
})
export class CurrencyCardComponent {

  @Input() currency: string;
  @Input() currencyName: string;
  @Input() currencySymbol: string;

}
