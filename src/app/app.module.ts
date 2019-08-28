import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideObservableService } from './aside-observable.service';
import { AsideCallbackService } from './aside-callback.service';
import { CheckboxFunBadComponent } from './checkbox-fun-bad/checkbox-fun-bad.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxFunBadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AsideObservableService, AsideCallbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
