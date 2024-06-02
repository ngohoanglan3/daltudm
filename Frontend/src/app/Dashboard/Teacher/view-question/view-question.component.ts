import { Component } from '@angular/core';
import { TeacherDashboardComponent } from '../teacher-dashboard/teacher-dashboard.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ViewQuestionService } from '../../../Service/view-question.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';

export interface questionElement {
  index: number;
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
}

@Component({
  selector: 'app-view-question',
  standalone: true,
  imports: [
    TeacherDashboardComponent,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  templateUrl: './view-question.component.html',
  styleUrl: './view-question.component.css',
  providers: [ViewQuestionService],
})
export class ViewQuestionComponent {
  displayedColumns = [
    'index',
    'column1',
    'column2',
    'column3',
    'column4',
    'column5',
  ];
  ELEMENT_DATA: questionElement[]
  dataSource: MatTableDataSource<questionElement>;
  selection = new SelectionModel<questionElement>(true, []);

  constructor(private question: ViewQuestionService) {}

  ngOnInit() {
    this.question.getData().subscribe(
      (response: any) => {
        this.ELEMENT_DATA = response.map((item) => {
          let element: questionElement = {
            index: 0,
            column1: item.description,
            column2: '',
            column3: '',
            column4: '',
            column5: '',
          };

          item.aset.forEach((answer) => {
            switch (answer.options) {
              case 1:
                element.column2 = answer.description;
                break;
              case 2:
                element.column3 = answer.description;
                break;
              case 3:
                element.column4 = answer.description;
                break;
              case 4:
                element.column5 = answer.description;
                break;
            }
          });

          return element;
        });
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        console.log(this.dataSource);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: questionElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.index + 1}`;
  }
}
