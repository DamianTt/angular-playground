import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { timer, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: "app-async-template",
  templateUrl: "./async-template.component.html",
  styleUrls: ["./async-template.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncTemplateComponent implements OnInit {
  syncVisibility = true;
  asyncVisibility = true;
  rx1Visibility = true;
  rx2Visibility$ = new BehaviorSubject(true);

  constructor() {}

  ngOnInit() {}

  changeSyncVisibility(value: boolean): void {
    this.syncVisibility = value;
  }

  changeAsyncVisibility(value: boolean): void {
    setTimeout(() => {
      this.asyncVisibility = value;
    }, 0);
  }

  changeRx1Visibility(value: boolean): void {
    timer(0).pipe(tap(() => {
      this.rx1Visibility = value;
    })).subscribe();
  }

  changeRx2Visibility(value: boolean): void {
    this.rx2Visibility$.next(value);
  }
}
