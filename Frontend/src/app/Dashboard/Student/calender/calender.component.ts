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
import { formatDate } from '@angular/common';

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
  selected = new Date();
  examTime: null;
  formattedExamDateTime: string[];
  formattedDate: string;

  constructor(private exam: GetExamService) {}

  isToday(): boolean {
    console.log(this.selected);
    const today = new Date();
    return this.selected.getDate() === today.getDate() &&
      this.selected.getMonth() === today.getMonth() &&
      this.selected.getFullYear() === today.getFullYear();
  }

  ngOnInit() {
    let date = new Date();
    let formattedDate = date.toISOString().slice(0,10);
    console.log(formattedDate); // Outputs: yyyy-mm-dd


    this.exam.getExam().subscribe(
      (response: any) => {   
        sessionStorage.setItem('examResponse', response);     
        console.log(response);
        // response.forEach((exam: any) => {
        //   let examDateTime = new Date(exam.time_test);
        //   // Định dạng lại giá trị của "time_test"
        //   exam.time_test = formatDate( examDateTime, 'yyyy-MM-dd HH:mm:ss', 'en-US');
        // });
        // // Chuyển đổi response thành chuỗi JSON và lưu vào sessionStorage
        // sessionStorage.setItem('examResponse', JSON.stringify(response));
        // let examData = JSON.parse(response);
        // let dateOnly = examData.time_test.split(' ');
        // console.log(dateOnly);  // In ra: '2024-05-30'
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  isSameDate(): boolean {
    // let examDateOnly = this.formattedExamDateTime.split(' ')[0];
    // if (this.formattedDate === examDateOnly) {
    //   console.log('Ngày giống nhau');
    // } else {
    //   console.log('Ngày khác nhau');
    // }
    // return this.formattedDate === this.formattedExamDateTime;
    return true;
  }
}
