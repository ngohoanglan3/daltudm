import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './LoginComponent/teacher/teacher.component';
import { StudentComponent } from './LoginComponent/student/student.component';
import { AdminComponent } from './LoginComponent/admin/admin.component';
import { NgModule } from '@angular/core';
import { ForgotPassComponent } from './LoginComponent/forgot-pass/forgot-pass.component';
import { StudentDashboardComponent } from './Dashboard/Student/student-dashboard/student-dashboard.component';
import { CalenderComponent } from './Dashboard/Student/calender/calender.component';
import { TeacherDashboardComponent } from './Dashboard/Teacher/teacher-dashboard/teacher-dashboard.component';
import { ViewComponent } from './Dashboard/Teacher/view/view.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', title: 'Đăng Nhập', component: StudentComponent },
  { path: 'student/dashboard', component: StudentDashboardComponent },
  { path: 'student/dashboard/calendar', component: CalenderComponent},
  { path: 'teacher',title: 'Đăng Nhập', component: TeacherComponent },
  { path: 'teacher/dashboard', component: TeacherDashboardComponent},
  { path: 'teacher/dashboard/view', component: ViewComponent },
  { path: 'admin', title: 'Đăng Nhập', component: AdminComponent },
  { path: 'forgotpass', component: ForgotPassComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
