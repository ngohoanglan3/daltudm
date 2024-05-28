import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
    selector: 'app-forgot-pass',
    standalone: true,
    templateUrl: './forgot-pass.component.html',
    styleUrl: './forgot-pass.component.css',
    imports: [LoginComponent]
})
export class ForgotPassComponent extends LoginComponent {
}
