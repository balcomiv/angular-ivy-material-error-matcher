import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../error-state-matcher';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() form: FormGroup;

  @Input() submitted;

  matcher = new MyErrorStateMatcher();

  get emailFormControl() {
    return this.form?.get('email') as FormControl;
  }

  get addedControl() {
    return this.form.get('addedControl') as FormControl;
  }

  constructor(private cd: ChangeDetectorRef) {
    setTimeout(() => {
      // this.cd.markForCheck();
    });
  }

  ngOnInit() {
    this.form?.addControl(
      'addedControl',
      new FormControl('', Validators.required)
    );
  }
}
