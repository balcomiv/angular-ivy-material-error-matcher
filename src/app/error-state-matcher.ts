import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when control is invalid and form is submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    console.log('error matcher shows form submitted?', form.submitted);
    return control && control.invalid && form && form.submitted;
  }
}
