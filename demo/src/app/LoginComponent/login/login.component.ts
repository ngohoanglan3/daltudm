import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username!: string;
  password!: string;
  title!: string;
name: any;

  constructor(private router: Router) {}

  student(): void {
      this.router.navigateByUrl('/student');
  }
  
  teacher(): void {
    this.router.navigateByUrl('/teacher');
  }

  admin(): void {
    this.router.navigateByUrl('/admin');
  }

  forgotPass() {
    this.router.navigateByUrl('/forgotpass');
  }

  login() {}
}
