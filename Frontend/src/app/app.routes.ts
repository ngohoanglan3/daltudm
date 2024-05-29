import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentDashboardComponent } from './Dashboard/Student/student-dashboard/student-dashboard.component';
import { CalenderComponent } from './Dashboard/Student/calender/calender.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './LoginComponent/login/login.component';
import { routeGuard } from './Service/route-guard.guard';
import { ForgotPassComponent } from './LoginComponent/forgot-pass/forgot-pass.component';
import { cantBackGuard } from './Service/cant-back.guard';
import { TeacherDashboardComponent } from './Dashboard/Teacher/teacher-dashboard/teacher-dashboard.component';
import { ViewComponent } from './Dashboard/Teacher/view/view.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', title: 'Đăng Nhập', component: LoginComponent, canActivate: [cantBackGuard]},
  { path: 'login', 
    children: [{path: 'forgotPass', title: 'Quên Mật Khẩu', component: ForgotPassComponent}]
   },
  { path: 'student', title: 'Sinh Viên', component: StudentDashboardComponent, canActivate: [routeGuard]},
  {
    path: 'student',
    children: [{ path: 'calendar', title: 'Lịch Thi', component: CalenderComponent }],
  },
  { path: 'teacher', title: 'Giảng Viên', component: TeacherDashboardComponent},
  { path: 'teacher',
    children: [{ path: 'viewQuestion', title: 'Xem Câu Hỏi', component: ViewComponent}]
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
