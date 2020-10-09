import { PlataformDetectorService } from '../../core/plataform-detector/plataform-detector.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  @ViewChild('userNameInput') usernameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private plataformDetectorService: PlataformDetectorService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.plataformDetectorService.isPlataformBrowser() &&
            this.usernameInput.nativeElement.focus();
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        // () => this.router.navigateByUrl('user/' + userName),
        () => this.router.navigate(['user', userName]),
        err => {
          console.log(err);
          this.loginForm.reset();
          this.plataformDetectorService.isPlataformBrowser() &&
            this.usernameInput.nativeElement.focus();
          alert('Invalid user name or password');
        }
      );
  }
}
