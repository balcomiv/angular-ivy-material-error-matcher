import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MyErrorStateMatcher } from './error-state-matcher';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  submitted = new Subject<void>();

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {}

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  useChildComponent = true;

  matcher = new MyErrorStateMatcher();

  submit() {
    console.log('submitted!');
    // this.cd.detectChanges();
    this.submitted.next();
  }
}
