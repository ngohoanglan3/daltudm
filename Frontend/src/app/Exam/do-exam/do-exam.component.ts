import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { GetExamService } from '../../Service/get-exam.service';
import { HttpClient } from '@angular/common/http';
import { interval, map } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


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

interface submit {
  option_choose: number;
  user_id: number;
  question_id: number;
}

@Component({
  selector: 'app-do-exam',
  standalone: true,
  providers: [GetExamService],
  imports: [MatRadioModule, CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './do-exam.component.html',
  styleUrl: './do-exam.component.css',
})
export class DoExamComponent {
  selectedOptions: any[] = [];
  questions: Question[];
  submit: submit[];
  examTitle: string;
  index: number;
  endDate: number;
  countdown: string;

  private token = sessionStorage.getItem('accessToken');
  private url = `http://localhost:8081/Question/temp/${
    this.exam.getNearestExam()?.exam_id
  }`;
  private submitUrl = 'http://localhost:8081/submit';
  private header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.token}`,
  };

  constructor(private exam: GetExamService, private http: HttpClient, private route: Router) {
    this.examTitle =
      this.exam.getNearestExam()?.name ?? 'Không tìm thấy kỳ thi';
    this.index = 0;
    this.submit = [];
    this.endDate = (this.exam.getNearestExam()?.time_test.getTime() ?? 0) + (this.exam.getNearestExam()?.test_time ?? 0) * 60 * 1000
  }

  ngOnInit() {    
    this.http
      .get(this.url, { headers: this.header })
      .subscribe((response: any) => {
        this.questions = response;
        this.questions.forEach((question) => {
          question.aset.sort((a, b) => a.options - b.options);
        });
      });

      interval(1000)
        .pipe(
          map((x) => {
            const now = new Date();
            const distance = this.endDate - now.getTime();
  
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
            return `${hours}:${minutes}:${seconds}`;
          })
        )
        .subscribe((x) => {
          this.countdown = x;
          if (this.countdown === '0:0:0') {
            setTimeout(() => {
              this.route.navigate(['student/exam']);
            }, 1000); // Sau 1 giây, reload trang
          }
        });
  }

  onOptionChange(event: any, questionIndex: number) {
    // Lấy giá trị của radio button đã chọn
    const selectedOption = event.value;
    console.log(selectedOption);

    // Lấy question_id của câu hỏi hiện tại
    const questionId = this.questions[questionIndex].question_id;
    console.log(questionId);

    // Tạo một đối tượng submit mới với option_choose và question_id
    const newSubmit: submit = {
      option_choose: parseInt(selectedOption, 10),
      user_id: 1, // Thay đổi giá trị này theo yêu cầu của bạn
      question_id: questionId,
    };

    // Xóa các mục trùng lặp trong mảng submit
    this.submit = this.submit.filter(
      (item) => item.question_id !== newSubmit.question_id
    );

    // Thêm đối tượng submit mới vào mảng submit
    this.submit.push(newSubmit);

    console.log(this.submit);
  }

  Submit() {
    this.http.post(this.submitUrl, this.submit, {headers: this.header}).subscribe((data) => {      
    })
    this.route.navigate(['student/exam']);
  }
}
