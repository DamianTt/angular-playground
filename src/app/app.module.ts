import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideObservableService } from './aside-observable.service';
import { AsideCallbackService } from './aside-callback.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AsideObservableService, AsideCallbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
