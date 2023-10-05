import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  faCircleUser = faUser;
  constructor(private router: Router, private authService: AuthService) { }

  password: string | undefined;


  async login() {
    await this.authService.login(this.password);

    this.router.navigate(['/todo']);
  }
}
