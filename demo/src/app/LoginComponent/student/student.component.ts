import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";

@Component({
    selector: 'app-student',
    standalone: true,
    templateUrl: './student.component.html',
    styleUrl: './student.component.css',
    imports: [LoginComponent]
})
export class StudentComponent extends LoginComponent {
    override title = 'Sinh Viên';
}
