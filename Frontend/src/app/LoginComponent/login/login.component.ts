import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  
  hide = true;
  logFail = false;
  form: any = {
    username: null,
    password: null
  }

  constructor(private route: Router, private auth: AuthService) {}

  onLogin() {
    const { username, password } = this.form
    this.auth.login(username, password).subscribe((response: any) => {
      this.logFail = false;
      localStorage.setItem('accessToken', response.accessToken)
      this.route.navigateByUrl("/student");
    },
    Error => {
      this.logFail = true;
    }
      // {
      // next: data => {
      //   this.logFail = false;
      //   this.route.navigateByUrl("/student");
      // },
      // error: err => {
      //   this.logFail = true;
      // }
      // }
    )
  }
  
  // onLogin() {
  //   // debugger;
  //   this.http.post('http://localhost:8081/User/Login', this.loginObj).subscribe(
  //     (response: any) => {
  //       localStorage.setItem(
  //         'loginTOken',
  //         JSON.stringify(response.accessToken)
  //       );
  //       this.route.navigateByUrl('/student');
  //       console.log(response);
  //     },
  //     (error) => {
  //       this.logFail = true;
  //     }
  //   );
  // }

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  studentUrl() {
    this.route.navigateByUrl('/login');
  }

  teacherUrl() {
    this.route.navigateByUrl('/teacher');
  }

  adminUrl() {
    this.route.navigateByUrl('/admin');
  }
}
