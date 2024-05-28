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
    debugger;
    this.http.post('http://localhost:8081/User/Login', this.loginObj).subscribe((res: any)=>{
      if(res.result) {
        localStorage.setItem('token', res.data.token)
        this.route.navigateByUrl('student/dashboard')
      }
      else {
        this.route.navigateByUrl('/')
      }
    })
  }

  studentUrl() {
    this.route.navigateByUrl("/login");
  }

  teacherUrl() {
    this.route.navigateByUrl("/teacher");
  }

  adminUrl() {
    this.route.navigateByUrl("/admin");
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
