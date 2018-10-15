import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  isLoading = false;

  constructor() {
    this.isLoading = true;
    this.getCourses()
      .subscribe(x => this.isLoading = false);
  }

  getCourses() {
    return timer(10000);
  }
}
