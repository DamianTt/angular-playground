import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  of
} from 'rxjs';
import { mergeMap, tap, take, delay } from 'rxjs/operators';

@Component({
  selector: 'app-infinite-scroll-fun',
  templateUrl: './infinite-scroll-fun.component.html',
  styleUrls: ['./infinite-scroll-fun.component.scss']
})
export class InfiniteScrollFunComponent implements OnInit, OnDestroy {
  skywalkers$ = new BehaviorSubject<string[]>(['Skywalker', 'Skywalker', 'Skywalker', 'Skywalker', 'Skywalker', 'Skywalker']);
  @ViewChild('anchor') anchor: ElementRef<HTMLElement>;

  private observer: IntersectionObserver;

  constructor() {}

  ngOnInit() {
    const options = {
      root: null
    };

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.loadSkywalkers();
      }
    }, options);

    this.observer.observe(this.anchor.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  loadSkywalkers() {
    this.getMoreSkywalkers()
      .pipe(
        mergeMap(newSkywalkers => {
          return this.skywalkers$.pipe(
            take(1),
            tap(currentSkywalkers => {
              this.skywalkers$.next([...currentSkywalkers, ...newSkywalkers]);
            })
          );
        })
      )
      .subscribe();
  }

  getMoreSkywalkers(): Observable<string[]> {
    return of(['Skywalker', 'Skywalker', 'Skywalker', 'Skywalker', 'Skywalker']).pipe(
      delay(200)
    );
  }
}
