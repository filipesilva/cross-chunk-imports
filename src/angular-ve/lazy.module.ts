import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lazy-comp',
  template: 'LazyComponent'
})
export class LazyComponent { }

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild([{ path: '', component: LazyComponent }]),
  ],
})
export class LazyModule { }
