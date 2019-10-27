import { Component, OnInit } from '@angular/core';
import { AsideObservableService } from './aside-observable.service';
import { AsideCallbackService } from './aside-callback.service';
import { Invoker, StartCommand, FinishCommand } from './aside-command-pattern';

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
    // this.asideObservableService.startingMyJob().subscribe(result => {
    //   console.log('Result of AsideService: ', result);
    //   this.runMeAfterAsideServiceFinished();
    // });

    /**
     * Option 2: Callback. Method must be arrow function, or bind(this) is needed
     */
    // this.asideCallbackService.startingMyJob(this.runMeAfterAsideServiceFinished);

    /**
     * Option 3: Command pattern
     * Opcja ta różni się od 1 i 2, bo nie wykonuje metody runMeAfterAsideServiceFinished
     */
    const invoker = new Invoker();
    invoker.setOnStart(new StartCommand());
    invoker.setOnFinish(new FinishCommand(`Print class field: ${this.title}`));
    invoker.doSomethingImportant();
  }

  runMeAfterAsideServiceFinished = () => {
    console.log('Print class field: ', this.title);
    console.log('Ω');
  }
}
