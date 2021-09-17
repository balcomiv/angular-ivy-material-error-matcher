import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  declarations: [AppComponent, ChildComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
