import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ViewQuestionService } from '../../../Service/view-question.service';

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.css',
  providers: [ViewQuestionService]
})
export class TeacherDashboardComponent {
  showBar = false;
  open = false;
  
  Logout() {
    sessionStorage.clear();    
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
