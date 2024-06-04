import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewExamService {

  constructor(private http: HttpClient) { }

  getData() {
    const url = 'http://localhost:8081/Exam/getAllNoQue'; 

    const token = sessionStorage.getItem('accessToken');
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    // Sử dụng phương thức get của HttpClient để gửi yêu cầu GET với header
    return this.http.get(url, { headers });
  }
}
