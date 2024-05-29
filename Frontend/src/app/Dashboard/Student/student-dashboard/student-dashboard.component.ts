import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../Service/auth.service';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule],
  providers: [AuthService],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {
  showBar = false;

  constructor(private route: Router) {}

  Logout() {
    localStorage.clear();    
  }

  toggleBar() {
    this.showBar = !this.showBar;
  }

  closeBar() {
    this.showBar = false;
  }

  toDashboard() {
    this.route.navigateByUrl('/student');
  }
}
