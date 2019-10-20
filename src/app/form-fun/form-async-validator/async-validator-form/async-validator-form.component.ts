import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-async-validator-form",
  templateUrl: "./async-validator-form.component.html",
  styleUrls: ["./async-validator-form.component.scss"]
})
export class AsyncValidatorFormComponent implements OnInit {

  formRepresentation = this.fb.group({
    textInput1: [''],
    textInput2: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    console.warn(this.formRepresentation.value);
  }
}
