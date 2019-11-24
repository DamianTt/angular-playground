import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AsyncValidatorFormComponent } from "./form-fun/form-async-validator/async-validator-form/async-validator-form.component";
import { AsyncTemplateComponent } from './async-template/async-template/async-template.component';
import { TripleAsyncAndDetectChangesComponent } from './random/triple-async-and-detect-changes/triple-async-and-detect-changes.component';
import { CssEncComponent } from './random/css-enc/css-enc.component';
import { InfiniteScrollFunComponent } from './random/infinite-scroll-fun/infinite-scroll-fun.component';
import { DetectFullRenderComponent } from './random/detect-full-render/detect-full-render.component';
import { StarGridComponent } from './random/star-grid/star-grid.component';

const routes: Routes = [
  { path: "form1", component: AsyncValidatorFormComponent },
  { path: "async-template", component: AsyncTemplateComponent },
  { path: "triple-async", component: TripleAsyncAndDetectChangesComponent },
  { path: 'css-enc', component: CssEncComponent},
  { path: 'infinite-scroll', component: InfiniteScrollFunComponent},
  { path: 'detect-full-render', component: DetectFullRenderComponent},
  { path: 'star-grid', component: StarGridComponent },
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
