import { Component } from '@angular/core';
import { StudentDashboardComponent } from '../student-dashboard/student-dashboard.component';
import { GetExamService } from '../../../Service/get-exam.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

export interface examElement {
  description: string;
  exam_id: number;
  name: string;
  time_test: Date;
  test_time: number;
}

@Component({
  selector: 'app-nearest-exam',
  standalone: true,
  templateUrl: './nearest-exam.component.html',
  styleUrl: './nearest-exam.component.css',
  providers: [GetExamService],
  imports: [StudentDashboardComponent, DatePipe],
})
export class NearestExamComponent {
  examElements: examElement;

  constructor(private exam: GetExamService, private route: Router) {}

  ngOnInit() {
    let exam = this.exam.getNearestExam()
    if(exam !== null) {
      this.examElements = exam;
    }
  }

  startExam() {
    const now = new Date().getTime();
    const testDate = new Date(this.examElements.time_test).getTime();
    const testEndDate = testDate + 15 * 60 * 1000; // Thêm 15 phút vào thời gian bắt đầu

    if (now > testDate && now < testEndDate) {
      this.route.navigate(['student/doExam']); // Thay '/exam-page' bằng đường dẫn thực tế của bạn
    } else {
      alert('Bài thi không khả dụng vào thời điểm này.');
      location.reload();
    }
  }

  getExamId() {
    return this.examElements?.exam_id;
  }
}
