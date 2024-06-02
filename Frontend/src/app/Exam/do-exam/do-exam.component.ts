import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { GetExamService } from '../../Service/get-exam.service';
import { HttpClient } from '@angular/common/http';

interface Answer {
  answer_id: number;
  options: number;
  description: string;
}

interface Question {
  question_id: number;
  description: string;
  aset: Answer[];
}

@Component({
  selector: 'app-do-exam',
  standalone: true,
  providers: [GetExamService],
  imports: [MatRadioModule,CommonModule],
  templateUrl: './do-exam.component.html',
  styleUrl: './do-exam.component.css',
})
export class DoExamComponent {
  questions: Question[];
  examTitle: string;
  index: number;

  private token = sessionStorage.getItem('accessToken');
  private url = `http://localhost:8081/Question/temp/${
    this.exam.getNearestExam()?.exam_id
  }`;
  private header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.token}`,
  };

  constructor(private exam: GetExamService, private http: HttpClient) {
    this.examTitle = this.exam.getNearestExam()?.name ?? 'Không tìm thấy kỳ thi';
    this.index = 0;
  }

  ngOnInit() {
    this.http.get(this.url, { headers: this.header }).subscribe((response: any) => {
      this.questions = response;
      this.questions.forEach(question => {
        question.aset.sort((a, b) => a.options - b.options);
      });
    });
  }
}
