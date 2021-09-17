import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyErrorStateMatcher } from '../error-state-matcher';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input() form: FormGroup;

  @Input() submitted;

  matcher = new MyErrorStateMatcher();

  get emailFormControl() {
    return this.form?.get('email') as FormControl;
  }

  constructor(private cd: ChangeDetectorRef) {
    setTimeout(() => {
      // this.cd.markForCheck();
    });
  }
}
