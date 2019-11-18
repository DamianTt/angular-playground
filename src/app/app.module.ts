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
import { CssEncComponent } from './random/css-enc/css-enc.component';
import { CssEncChild1Component } from './random/css-enc/css-enc-child1/css-enc-child1.component';
import { InfiniteScrollFunComponent } from './random/infinite-scroll-fun/infinite-scroll-fun.component';
import { PreventParentScrollDirective } from './random/infinite-scroll-fun/prevent-parent-scroll.directive';
import { DetectFullRenderComponent } from './random/detect-full-render/detect-full-render.component';
import { DetectFullRenderService } from './random/detect-full-render/detect-full-render.service';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxFunBadComponent,
    AsyncValidatorFormComponent,
    AsyncTemplateComponent,
    TripleAsyncAndDetectChangesComponent,
    CssEncComponent,
    CssEncChild1Component,
    InfiniteScrollFunComponent,
    PreventParentScrollDirective,
    DetectFullRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AsideObservableService, AsideCallbackService, DetectFullRenderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
