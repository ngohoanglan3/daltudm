import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs';
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
}
