import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  loginObj: Login;

  constructor(private route: Router, private http: HttpClient) {
    this.loginObj = new Login();
  }

  onLogin() {
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login', this.loginObj).subscribe((res: any)=>{
      if(res.result) {
        localStorage.setItem('token', res.data.token)
        this.route.navigateByUrl('/dashboard')
      }
      else {
        this.route.navigateByUrl('/')
      }
    })
  }

  student(): void {
    this.route.navigateByUrl('/student');
  }

  teacher(): void {
    this.route.navigateByUrl('/teacher');
  }

  admin(): void {
    this.route.navigateByUrl('/admin');
  }

  forgotPass() {
    this.route.navigateByUrl('/forgotpass');
  }
}

export class Login {
  username: string;
  password: string;
  constructor() {
    this.username = '';
    this.password = '';
  }
}
