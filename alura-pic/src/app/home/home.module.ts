import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SiginComponent } from './sigin/sigin.component';
import { VmessageModule } from './../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [SiginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule
  ]
})
export class HomeModule { }
