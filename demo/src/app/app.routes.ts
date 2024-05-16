import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './LoginComponent/teacher/teacher.component';
import { StudentComponent } from './LoginComponent/student/student.component';
import { AdminComponent } from './LoginComponent/admin/admin.component';
import { NgModule } from '@angular/core';
import { ForgotPassComponent } from './LoginComponent/forgot-pass/forgot-pass.component';
import { LoginComponent } from './LoginComponent/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'student', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'forgotpass', component: ForgotPassComponent},
  { path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
