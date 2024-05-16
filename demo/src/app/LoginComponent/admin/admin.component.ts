import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [LoginComponent]
})
export class AdminComponent extends LoginComponent {

}
