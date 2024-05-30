import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionService {

  constructor(private http: HttpClient) { }

  getData() {
    const url = 'http://localhost:8081/Question/getAll'; // Thay đổi URL này thành URL của API bạn muốn gọi

    // Tạo một đối tượng HttpHeaders mới và thêm header bạn muốn gửi
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Thay đổi 'your-token' thành token thực tế của bạn
    });

    // Sử dụng phương thức get của HttpClient để gửi yêu cầu GET với header
    return this.http.get(url, { headers });
  }
}
