import { ChangeDetectorRef } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when control is invalid and form is submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  // constructor(private cd: ChangeDetectorRef) {
  //   //
  // }

  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    console.log('error matcher shows form submitted?', form.submitted);
    // if (form && form.submitted) {
    //   this.cd.markForCheck();
    // }

    return control && control.invalid && form && form.submitted;
  }
}
