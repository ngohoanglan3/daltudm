import { HttpClientModule } from '@angular/common/http';
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
      sessionStorage.setItem('accessToken', response.accessToken);
      sessionStorage.setItem('role', response.role.role_id);
      if (response.role.role_id == 1) {
        this.route.navigateByUrl("/student");
      }
      else if(response.role.role_id == 2) {
        this.route.navigateByUrl("/teacher");
      }
      else if(response.role.role_id == 3) {

      }      
    },
    Error => {
      this.logFail = true;
    }      
    )
  }

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
