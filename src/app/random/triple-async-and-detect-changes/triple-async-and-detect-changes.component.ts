import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-triple-async-and-detect-changes',
  templateUrl: './triple-async-and-detect-changes.component.html',
  styleUrls: ['./triple-async-and-detect-changes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripleAsyncAndDetectChangesComponent implements OnInit {

  ordinaryField = '%';

  asyncField = '$';

  asyncCDR = '&';

  subjectField$ = new BehaviorSubject<boolean>(false);

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  syncChangeField(): void {
    this.ordinaryField = this.ordinaryField + '%';
  }

  asyncChangeField(): void {
    setTimeout(() => {
      this.asyncField = this.asyncField + '$';
    }, 0);
  }

  asyncCDRChangeField(): void {
    setTimeout(() => {
      this.asyncCDR = this.asyncCDR + '&';
      this.cdr.detectChanges();
    }, 0);
  }

  subjectChangeField(): void {
    this.subjectField$.next(!this.subjectField$.value);
  }

  doShit(){ }
}
