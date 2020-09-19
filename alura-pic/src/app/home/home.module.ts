import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SiginComponent } from './sigin/sigin.component';

@NgModule({
  declarations: [SiginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
