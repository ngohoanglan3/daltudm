import { Component } from '@angular/core';
import { TeacherDashboardComponent } from '../teacher-dashboard/teacher-dashboard.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ViewScoreService } from '../../../Service/view-score.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface score {
  index: number;
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
}

@Component({
  selector: 'app-view-score',
  standalone: true,
  templateUrl: './view-score.component.html',
  styleUrl: './view-score.component.css',
  providers: [ViewScoreService],
  imports: [
    TeacherDashboardComponent,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
})
export class ViewScoreComponent {
  displayedColumns = [
    'index',
    'column1',
    'column2',
    'column3',
    'column4',
    'column5',
  ];
  ELEMENT_DATA: score[];
  dataSource: MatTableDataSource<score>;
  selection = new SelectionModel<score>(true, []);

  constructor(private score: ViewScoreService) {}

  ngOnInit() {
    this.score.getData().subscribe(
      (response: any) => {
        this.ELEMENT_DATA = response.map((item) => {
          let element: score = {
            index: 0,
            column1: item.id.exam_id,
            column2: item.id.user_id,
            column3: item.score,
            column4: item.start_time,
            column5: item.end_time,
          };
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
  checkboxLabel(row?: score): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.index + 1
    }`;
  }
}
