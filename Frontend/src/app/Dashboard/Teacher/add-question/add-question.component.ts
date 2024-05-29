import { Component } from '@angular/core';
import { TeacherDashboardComponent } from '../teacher-dashboard/teacher-dashboard.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-add-question',
  standalone: true,
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css',
  imports: [TeacherDashboardComponent],
})
export class AddQuestionComponent {
  storeData: any;
  csvData: any;
  jsonData: any;
  textData: any;
  htmlData: any;

  uploadedFile(event) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.storeData = fileReader.result;
      var data = new Uint8Array(this.storeData);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i)
        arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join('');
      var workbook = XLSX.read(bstr, { type: 'binary' });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
    };
    fileReader.readAsArrayBuffer(file);
  }
}
