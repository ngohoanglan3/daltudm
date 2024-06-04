import { Component } from '@angular/core';
import { TeacherDashboardComponent } from '../teacher-dashboard/teacher-dashboard.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ViewExamService } from '../../../Service/view-exam.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface Exam {
  index: number;
  column1: number;
  column2: string;
  column3: Date;
  column4: number;
  column5: string;
}

@Component({
  selector: 'app-view-exam',
  standalone: true,
  templateUrl: './view-exam.component.html',
  styleUrl: './view-exam.component.css',
  providers: [ViewExamService],
  imports: [
    TeacherDashboardComponent,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
})
export class ViewExamComponent {
    displayedColumns = [
        'index',
        'column1',
        'column2',
        'column3',
        'column4',
        'column5',
      ];
      ELEMENT_DATA: Exam[]
      dataSource: MatTableDataSource<Exam>;
      selection = new SelectionModel<Exam>(true, []);
    
      constructor(private exam: ViewExamService) {}
    
      ngOnInit() {
        this.exam.getData().subscribe(
          (response: any) => {
            this.ELEMENT_DATA = response.map((item) => {
              let element: Exam = {
                index: 0,
                column1: item.exam_id,
                column2: item.name,
                column3: item.time_test,
                column4: item.test_time,
                column5: item.description,
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
      checkboxLabel(row?: Exam): string {
        if (!row) {
          return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.index + 1}`;
      }
}
