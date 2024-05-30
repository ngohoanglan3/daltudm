import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetExamService {

  constructor(private http: HttpClient) { }

  getExam() {
    const url = 'http://localhost:8081/Exam/getAll'; // Thay đổi URL này thành URL của API bạn muốn gọi
    
    return this.http.get(url);
  }
}
