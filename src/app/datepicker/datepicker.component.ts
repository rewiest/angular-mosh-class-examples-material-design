import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent {

  minDate = new Date(2018, 1, 1);
  maxDate = new Date(2018, 8, 1);

}
