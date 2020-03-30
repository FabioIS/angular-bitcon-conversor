import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent {


  errorMessage = '';
  startDateValue: Date = new Date(new Date().setDate(new Date().getDate() - 30));
  endDateValue: Date = new Date();
  maxDate: any = new Date();
  maxStartDate: any = new Date(new Date().setDate(new Date().getDate() - 2));

  // Here I apply the filters used but the date pickers such as maximum range of a year or start date can´t be higher than end date
  dateEndFilter = date => {
    if (this.startDateValue && this.startDateValue >= date) {
      this.errorMessage = 'End date can´t be lower than start date';
      return false;
    } else if (this.startDateValue && Math.ceil(
      (date.getTime() - this.startDateValue.getTime()) / (1000 * 60 * 60 * 24)) > 360) {
      this.errorMessage = 'The maximum range possible is one year';
      return false;
    }
    return true;
  };

  dateStartFilter = date => {
    if (this.endDateValue && this.endDateValue <= date) {
      this.errorMessage = 'Start date can´t be higher than end date';
      return false;
    } else if (this.endDateValue && Math.ceil(
      (this.endDateValue.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)) > 360) {
      this.errorMessage = 'The maximum range possible is one year';
      return false;
    }
    return true;
  };

}
