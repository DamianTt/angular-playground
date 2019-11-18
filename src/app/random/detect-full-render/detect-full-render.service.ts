import { Injectable, NgZone } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import {
  filter,
  startWith,
  tap,
  takeUntil,
  map,
  distinctUntilChanged,
  take
} from "rxjs/operators";
import { interval } from "rxjs";

// https://dev.to/herodevs/route-fully-rendered-detection-in-angular-2nh4
@Injectable({
  providedIn: "root"
})
export class DetectFullRenderService {

  constructor(private router: Router, private zone: NgZone) {
    const navStart$ = this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      //startWith(null),
      tap(event => {
        console.log("DetectFullRenderService --> Navigation starts");
      })
    );

    this.zone.runOutsideAngular(() => {
      // Check very regularly to see if the pending macrotasks have all cleared
      interval(10)
        .pipe(
          tap(() => console.log('tt', this.zone)),
          //startWith(0), // So that we don't initially wait
          // To prevent a memory leak on two closely times route changes, take until the next nav start
          //takeUntil(navStart$),
          // Turn the interval number into the current state of the zone
          map(() => !this.zone.hasPendingMacrotasks),
          // Don't emit until the zone state actually flips from `false` to `true`
          distinctUntilChanged(),
          // Filter out unstable event. Only emit once the state is stable again
          filter(stateStable => stateStable === true),
          // Complete the observable after it emits the first result
          take(1),
          tap(stateStable => {
            console.log('fully rendered: ', stateStable);
          })
        )
        .subscribe();
    });
  }
}
