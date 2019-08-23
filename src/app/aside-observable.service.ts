import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AsideObservableService {

  constructor() { }

  startingMyJob(): Observable<any> {
    const serviceSubject = new Subject<any>();

    console.log('AsideObservableService: Im starting my job');

    setTimeout(() => this.working(serviceSubject), 2000);

    return serviceSubject.asObservable();
  }

  working(serviceSubject) {
    console.log('AsideObservableService: working');

    setTimeout(() => this.finishingMyJob(serviceSubject), 3000);
  }

  finishingMyJob(subject: Subject<any>) {
    console.log('AsideObservableService: Job finished');
    subject.next('EmittingCompleteState');
    subject.complete();
  }
}
