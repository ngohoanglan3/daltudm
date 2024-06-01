import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { StudentDashboardComponent } from '../student-dashboard/student-dashboard.component';
import { GetExamService } from '../../../Service/get-exam.service';
import { Router } from '@angular/router';

export interface examElement {
  description: string;
  exam_id: number;
  name: string;
  time_test: Date;
}

@Component({
  selector: 'app-calender',
  standalone: true,
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css',
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'vi-VN' },
    GetExamService,
  ],
  imports: [
    StudentDashboardComponent,
    MatCardModule,
    MatDatepickerModule,
    CommonModule,
  ],
})
export class CalenderComponent {
  selected: Date;
  highlight: boolean;
  highlightDate: Date[];
  examElements: examElement[];
  selectedExams: examElement[];

  onSelect(event) {
    this.selected = event;
  }

  constructor(private exam: GetExamService, private route: Router) {
    this.selected = new Date();
    this.examElements = [
      {
        description: '',
        exam_id: 0,
        name: '',
        time_test: new Date(),
      },
    ];
    this.selectedExams = [];
    this.highlightDate = [];
  }

  ngOnInit() {
    this.examElements = this.exam.getExamsFromLocalStorage();
    this.examElements.forEach((exam) => {
      exam.time_test = new Date(exam.time_test);
    });
    this.highlightDate = this.examElements.map(
      (item) => new Date(item.time_test)
    );
  }

  dateClass = (d: Date) => {
    const highlight = new Date(d);
    let className;

    this.highlightDate.forEach((i) => {
      if (
        highlight.getDate() === i.getDate() &&
        highlight.getMonth() === i.getMonth() &&
        highlight.getFullYear() == i.getFullYear()
      ) {
        className = 'example-custom-date-class';
      }
    });
    return className || '';
  };

  viewExam(): boolean {
    let check = false;
    this.selectedExams = [];
    this.examElements.forEach((i) => {
      if (
        this.selected.getDate() === i.time_test.getDate() &&
        this.selected.getMonth() === i.time_test.getMonth() &&
        this.selected.getFullYear() === i.time_test.getFullYear()
      ) {
        check = true;
        this.selectedExams.push(i);
      }
    });
    return check;
  }

  navigateToExam(examId: number): void {
    this.route.navigate(['/student/exam', examId]);
  }
}
