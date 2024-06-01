import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../Service/auth.service';
import { GetExamService } from '../../../Service/get-exam.service';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule],
  providers: [AuthService, GetExamService],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {
  showBar = false;

  constructor(private route: Router, private exam: GetExamService) {}

  ngOnInit() {
    this.exam.getExam().subscribe();
  }

  Logout() {
    sessionStorage.clear();    
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
