import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideObservableService } from './aside-observable.service';
import { AsideCallbackService } from './aside-callback.service';
import { CheckboxFunBadComponent } from './checkbox-fun-bad/checkbox-fun-bad.component';
import { AsyncValidatorFormComponent } from './form-fun/form-async-validator/async-validator-form/async-validator-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncTemplateComponent } from './async-template/async-template/async-template.component';
import { TripleAsyncAndDetectChangesComponent } from './random/triple-async-and-detect-changes/triple-async-and-detect-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxFunBadComponent,
    AsyncValidatorFormComponent,
    AsyncTemplateComponent,
    TripleAsyncAndDetectChangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AsideObservableService, AsideCallbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
