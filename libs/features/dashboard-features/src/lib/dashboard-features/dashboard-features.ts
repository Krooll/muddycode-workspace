import {Component, inject, signal} from '@angular/core';
import {form, FormField} from "@angular/forms/signals";
import {CookieService} from "ngx-cookie-service";

interface LoginData {
  email: string;
  password: string;
}


@Component({
  selector: 'lib-dashboard-features',
  imports: [
    FormField
  ],
  templateUrl: './dashboard-features.html',
  styleUrl: './dashboard-features.scss',
})
export class DashboardFeatures {
  private readonly _cookiesService = inject(CookieService);

  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel);

  setToken(payload: { email: string; password: string }) {
    this._cookiesService.set(
      'auth_token',
      JSON.stringify(payload),
      {
        path: '/',
        domain: 'localhost',
        secure: false,
        sameSite: 'Lax'
      }
    );
  }

  saveCookiesData() {
    const emailValue = this.loginForm.email().value;
    const passwordValue = this.loginForm.password().value;

    const payload = {
      email: emailValue(),
      password: passwordValue()
    }

    this.setToken(payload);
  }
}
