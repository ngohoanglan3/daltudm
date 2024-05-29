import { Component } from '@angular/core';
import { TeacherDashboardComponent } from '../teacher-dashboard/teacher-dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-view',
  standalone: true,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
  imports: [
    TeacherDashboardComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ],
})
export class ViewComponent {
  displayedColumns = [
    'question',
    'answer1',
    'answer2',
    'answer3',
    'answer4',
    'correct',
  ];
  dataSource = QUESTION_DATA;
}

export interface QuestionData {
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correct: string;
}

const QUESTION_DATA: QuestionData[] = [
  {question: 'Câu hỏi 1', answer1: 'Đáp án 1', answer2: 'Đáp án 2', answer3: 'Đáp án 3', answer4: 'Đáp án 4', correct: 'Đáp án đúng'},
  {question: 'Which of the following is true about the characteristics of abstract data types?', answer1: 'It exports a type.', answer2: 'It exports a set of operations.', answer3: 'True, True', answer4: 'False, False', correct: 'Tùy vào đáp án đúng'},
  {question: 'Which of the following data structures are indexed structures?', answer1: 'Linear arrays', answer2: 'Linked lists', answer3: 'Queue', answer4: 'Stack', correct: 'Tùy vào đáp án đúng'},
  {question: 'Operations on a data structure may be …..', answer1: 'creation', answer2: 'destruction', answer3: 'selection', answer4: 'all of the above', correct: 'Tùy vào đáp án đúng'},
  {question: 'Which of the following are the operations applicable an primitive data structures?', answer1: 'create', answer2: 'destroy', answer3: 'update', answer4: 'all of the above', correct: 'Tùy vào đáp án đúng'},
];