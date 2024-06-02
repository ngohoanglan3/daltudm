import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetExamService } from './get-exam.service';
import { Observable, map, of } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class GetQuestionService {  

  constructor(private http: HttpClient, private exam: GetExamService) { }
  private token = sessionStorage.getItem('accessToken');
  private url = `http://localhost:8081/Question/temp/${
    this.exam.getNearestExam()?.exam_id
  }`;
  private header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.token}`,
  };
  private questions: Question[];

  getData(): Observable<Question[]> {
    if (this.questions) {
      // Nếu dữ liệu đã được lấy, sử dụng dữ liệu đã lưu
      return of(this.questions);
    } else {
      // Nếu chưa có dữ liệu, lấy dữ liệu từ API
      return this.http.get<Question[]>(this.url, { headers: this.header }).pipe(
        map(data => {
          this.questions = data;
          return this.questions;
        })
      );
    }
  }

  getQuestionById(id: number): Question {
    return this.questions.find(question => question.question_id === id)!;
  }
  
  getAnswerById(id: number): Answer {
    for (let question of this.questions) {
      let answer = question.aset.find(answer => answer.answer_id === id);
      if (answer) {
        return answer!;
      }
    }
    throw new Error('Answer not found');
  }
  
}
