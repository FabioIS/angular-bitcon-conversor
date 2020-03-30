import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import * as Chart from 'chart.js';
import {ChartDataSets, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {CurrencyServiceService} from '../services/currency-service.service';

@Component({

  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnChanges, OnInit {


  @Input() startDate = new Date(new Date().setDate(new Date().getDate() - 30));
  @Input() endDate = new Date();
  @Input() message;

  constructor(private _currencyService: CurrencyServiceService) {
  }

  chartData = [];
  chartLabel = [];

  // I make use of ng2-charts library to created the chart
  lineChartData: ChartDataSets[] = [
    {data: this.chartData, label: 'Last 30 days evolution in USD'},
  ];

  lineChartLabels: Label[] = this.chartLabel;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'transparent',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

  ngOnInit(): void {
    this.updateData();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateData();
  }

  updateData() {
    const startDateFormatted = this.getFormattedDate(this.startDate.getFullYear(), this.startDate.getMonth() + 1, this.startDate.getDate());
    const endDateFormatted = this.getFormattedDate(this.endDate.getFullYear(), this.endDate.getMonth() + 1, this.endDate.getDate());

    // Retrieve the historic conversion from service and push it to the data array used by the chart
    this._currencyService.getHistoricConversion(startDateFormatted, endDateFormatted).then(
      data => {
        this.chartLabel.length = 0;
        this.chartData.length = 0;
        Object.entries(data.bpi).forEach(entry => {
          this.chartLabel.push(entry[0]);
          this.chartData.push((entry[1]));
        });
        console.log(this.chartData);
      },
      error => error.message
    );
  }


  getFormattedDate(year, month, day) {
    let result = year;
    // tslint:disable-next-line:no-unused-expression
    result += month < 10 ? '-0' + month : '-' + month;
    result += day < 10 ? '-0' + day : '-' + day;
    return result;
  }


}
