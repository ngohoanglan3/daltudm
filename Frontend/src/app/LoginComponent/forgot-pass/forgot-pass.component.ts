import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-forgot-pass',
  standalone: true,
  templateUrl: './forgot-pass.component.html',
  styleUrl: './forgot-pass.component.css',
  imports: [
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule
  ],
})
export class ForgotPassComponent {
  form: any = {
    username: null,
    email: null,
  };
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  forgot() {
    
  }
}
