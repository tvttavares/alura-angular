import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { SignUpService } from './signup/signup.service';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    HomeRoutingModule,
    RouterModule
  ],
  providers: [SignUpService]
})
export class HomeModule { }
