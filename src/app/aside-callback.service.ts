import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsideCallbackService {

  constructor() { }

  startingMyJob(onSuccess): void {
    console.log('AsideCallbackService: Im starting my job');

    setTimeout(() => this.working(onSuccess), 2000);
  }

  working(onSuccess) {
    console.log('AsideCallbackService: working');
    setTimeout(() => this.finishingMyJob(onSuccess), 3000);
  }

  finishingMyJob(onSuccess) {
    console.log('AsideCallbackService: Job finished');
    onSuccess();
  }
}
