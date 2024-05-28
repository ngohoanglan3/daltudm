import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {
  showBar = false;

  constructor(private route: Router) {}

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
