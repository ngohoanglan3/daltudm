import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetExamService {

  constructor(private http: HttpClient) { }

  getExam() {
    const url = 'http://localhost:8081/Exam/getAllNoQue'; // Thay đổi URL này thành URL của API bạn muốn gọi

    const token = sessionStorage.getItem('accessToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Thay đổi 'your-token' thành token thực tế của bạn
    });
    
    return this.http.get(url, {headers});
  }
}
