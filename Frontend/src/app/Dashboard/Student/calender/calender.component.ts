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
  examElements: examElement[];
  constructor(private exam: GetExamService) {
    this.selected = new Date();
    this.examElements = [
      {
        description: '',
        exam_id: 0,
        name: '',
        time_test: new Date(),
      },
    ];
  }

  isToday(): boolean {
    const today = new Date();
    return (
      this.selected.getDate() === today.getDate() &&
      this.selected.getMonth() === today.getMonth() &&
      this.selected.getFullYear() === today.getFullYear()
    );
  }

  ngOnInit() {
    this.exam.getExam().subscribe(
      (response: any) => {
        this.examElements = response.map((item) => ({
          description: item.description,
          exam_id: item.exam_id,
          name: item.name,
          time_test: new Date(item.time_test),
        }));
        // this.examElements.forEach((i) => {
        //   console.log(i.time_test.toISOString())
        // })
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  viewExam(): boolean {
    let check = false;
    this.examElements.forEach((i) => {
      if (
        this.selected.getDate() === i.time_test.getDate() &&
        this.selected.getMonth() === i.time_test.getMonth() &&
        this.selected.getFullYear() === i.time_test.getFullYear()
      ) {
        check = true;
      }
    });
    return check;
  }
}
