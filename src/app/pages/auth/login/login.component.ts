import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.fb.group([
    {
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    },
  ]);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
