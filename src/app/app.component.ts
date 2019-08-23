import { Component, OnInit } from '@angular/core';
import { AsideObservableService } from './aside-observable.service';
import { AsideCallbackService } from './aside-callback.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private asideObservableService: AsideObservableService,
    private asideCallbackService: AsideCallbackService
  ) {}

  title = 'angular-playground';

  ngOnInit() {
    console.log('AppComponentOnInit');

    /**
     * Option 1: Observable
     */
    this.asideObservableService.startingMyJob().subscribe(result => {
      console.log('Result of AsideService: ', result);
      this.runMeAfterAsideServiceFinished();
    });

    /**
     * Option 2: Callback. Method must be arrow function, or bind(this) is needed
     */
    this.asideCallbackService.startingMyJob(this.runMeAfterAsideServiceFinished);
  }

  runMeAfterAsideServiceFinished = () => {
    console.log('Print class field: ', this.title);
    console.log('Ω');
  }
}
