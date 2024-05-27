import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './LoginComponent/teacher/teacher.component';
import { StudentComponent } from './LoginComponent/student/student.component';
import { AdminComponent } from './LoginComponent/admin/admin.component';
import { NgModule } from '@angular/core';
import { ForgotPassComponent } from './LoginComponent/forgot-pass/forgot-pass.component';
import { StudentDashboardComponent } from './Dashboard/student-dashboard/student-dashboard.component';
import { CalenderComponent } from './Dashboard/calender/calender.component';
import { NotfoundComponent } from './LoginComponent/notfound/notfound.component';
import { TeacherDashboardComponent } from './Dashboard/teacher-dashboard/teacher-dashboard.component';
import { ViewComponent } from './Dashboard/view/view.component';

export const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'student', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'forgotpass', component: ForgotPassComponent },
  { path: 'dashboard', component: StudentDashboardComponent},
  { path: 'dashboard/calendar', component: CalenderComponent},
  { path: 'teacherd', component: TeacherDashboardComponent},
  { path: 'teacherd/view', component: ViewComponent},
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
