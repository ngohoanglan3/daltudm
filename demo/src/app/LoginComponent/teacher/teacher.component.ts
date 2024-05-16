import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
    selector: 'app-teacher',
    standalone: true,
    templateUrl: './teacher.component.html',
    styleUrl: './teacher.component.css',
    imports: [LoginComponent]
})
export class TeacherComponent extends LoginComponent{

}
