import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.css',
})
export class TeacherDashboardComponent {
  showBar = false;
  open = false;

  Logout() {
    localStorage.clear();    
  }

  toggleBar() {
    this.showBar = !this.showBar;
  }

  closeBar() {
    this.showBar = false;
  }

  openBar() {
    this.open = !this.open;
  }

  hide() {
    this.open = false;
  }
}
