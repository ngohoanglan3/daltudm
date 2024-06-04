import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';

export interface examElement {
  description: string;
  exam_id: number;
  name: string;
  time_test: Date;
  test_time: number;
}

@Injectable({
  providedIn: 'root',
})
export class GetExamService {
  private examsUrl = 'http://localhost:8081/Exam/getAllNoQue';

  private token: any;

  private headers: any;

  constructor(private http: HttpClient) {
    this.token = sessionStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`, // Thay đổi 'your-token' thành token thực tế của bạn
    });
  }

  getExam() {
    return this.http.get<any[]>(this.examsUrl, { headers: this.headers }).pipe(
      tap((exams: any[]) => {
        localStorage.setItem('exams', JSON.stringify(exams));
      })
    );
  }

  getExamsFromLocalStorage() {
    const exams = localStorage.getItem('exams');
    return exams ? JSON.parse(exams) : null;
  }

  getNearestExam(): examElement | null {
    const exams = localStorage.getItem('exams');
    if (!exams) {
      return null;
    }

    const parsedExams = JSON.parse(exams);
    let i = 0;
    while (i < parsedExams.length) {
      const testDate = new Date(parsedExams[i].time_test).getTime();
      const time = new Date(parsedExams[i].test_time).getTime();
      const testEndDate = testDate + 15 * 60 * 1000;
      const testCloseDate = testDate + time * 60 * 1000;
      const now = new Date().getTime();
      if ((testEndDate > now) || (testDate < now && now < testCloseDate)) {
        return {
          description: parsedExams[i].description,
          exam_id: parsedExams[i].exam_id,
          name: parsedExams[i].name,
          time_test: new Date(parsedExams[i].time_test),
          test_time: parsedExams[i].test_time,
        };
      }
      i++;
    }

    return null;
  }
}
