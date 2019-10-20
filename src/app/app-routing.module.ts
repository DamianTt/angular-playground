import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AsyncValidatorFormComponent } from "./form-fun/form-async-validator/async-validator-form/async-validator-form.component";
import { AsyncTemplateComponent } from './async-template/async-template/async-template.component';

const routes: Routes = [
  { path: "form1", component: AsyncValidatorFormComponent },
  { path: "async-template", component: AsyncTemplateComponent },
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
