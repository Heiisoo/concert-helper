import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public authForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public constructor(private router: Router) {}

  public onConnection(): void {
    if (
      this.authForm.value.username === 'danidza' &&
      this.authForm.value.password === 'damien'
    ) {
      console.log('ça passe');

      this.router.navigate(['home-page']);
    } else {
      console.log('ça ne passe pas');
    }
  }
}
