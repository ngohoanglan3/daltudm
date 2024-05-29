import { Component } from '@angular/core';
import { TeacherDashboardComponent } from '../teacher-dashboard/teacher-dashboard.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-view-question',
  standalone: true,
  imports: [TeacherDashboardComponent, MatTableModule, MatFormFieldModule, MatInputModule],
  templateUrl: './view-question.component.html',
  styleUrl: './view-question.component.css'
})
export class ViewQuestionComponent {
  displayedColumns = ['column1', 'column2', 'column3', 'column4', 'column5'];
  dataSource = new MatTableDataSource(this.createRandomData());

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  createRandomData() {
    let data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        column1: Math.random().toString(36).substring(7),
        column2: Math.floor(Math.random() * 100),
        column3: Math.random().toString(36).substring(7),
        column4: Math.floor(Math.random() * 100),
        column5: Math.random().toString(36).substring(7)
      });
    }
    return data;
  }
}
