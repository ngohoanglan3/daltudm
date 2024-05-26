import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { StudentDashboardComponent } from '../student-dashboard/student-dashboard.component';

@Component({
  selector: 'app-calender',
  standalone: true,
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css',
  providers: [provideNativeDateAdapter()],
  imports: [StudentDashboardComponent, MatCardModule, MatDatepickerModule],
})
export class CalenderComponent {
    selected: Date | null;
}
