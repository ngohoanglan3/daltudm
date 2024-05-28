import { Component } from '@angular/core';
import { TeacherDashboardComponent } from "../teacher-dashboard/teacher-dashboard.component";
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-view',
    standalone: true,
    templateUrl: './view.component.html',
    styleUrl: './view.component.css',
    imports: [TeacherDashboardComponent, FormsModule, MatFormFieldModule, MatInputModule]
})
export class ViewComponent {

}
