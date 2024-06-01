import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { StudentDashboardComponent } from '../student-dashboard/student-dashboard.component';
import { GetExamService } from '../../../Service/get-exam.service';
import { ActivatedRoute } from '@angular/router';

export interface examElement {
  description: string;
  exam_id: number;
  name: string;
  time_test: Date;
}

@Component({
  selector: 'app-exam',
  standalone: true,
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css',
  providers: [GetExamService, DatePipe],
  imports: [StudentDashboardComponent, CommonModule],
})
export class ExamComponent {
  courseId: number | null;
  examElements: examElement;

  constructor(
    private exam: GetExamService,
    private activeRotue: ActivatedRoute
  ) {
    this.examElements = {
      description: '',
      exam_id: 0,
      name: '',
      time_test: new Date(),
    };
  }

  ngOnInit() {
    const id = this.activeRotue.snapshot.paramMap.get('id');
    this.courseId = id ? +id : null;
    let exams = this.exam.getExamsFromLocalStorage();
    let exam = exams.find((exam) => exam.exam_id === this.courseId);
    if (exam) {
      this.examElements = {
        description: exam.description,
        exam_id: exam.exam_id,
        name: exam.name,
        time_test: new Date(exam.time_test),
      };
    }
  }
}
