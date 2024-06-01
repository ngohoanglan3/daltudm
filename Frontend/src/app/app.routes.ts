import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentDashboardComponent } from './Dashboard/Student/student-dashboard/student-dashboard.component';
import { CalenderComponent } from './Dashboard/Student/calender/calender.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './LoginComponent/login/login.component';
import { ForgotPassComponent } from './LoginComponent/forgot-pass/forgot-pass.component';
import { TeacherDashboardComponent } from './Dashboard/Teacher/teacher-dashboard/teacher-dashboard.component';
import { ViewQuestionComponent } from './Dashboard/Teacher/view-question/view-question.component';
import { AddQuestionComponent } from './Dashboard/Teacher/add-question/add-question.component';
import { studentGuard } from './Service/student.guard';
import { teacherGuard } from './Service/teacher.guard';
import { cantBackGuard } from './Service/cant-back.guard';
import { ExamComponent } from './Dashboard/Student/exam/exam.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', title: 'Đăng Nhập', component: LoginComponent, canActivate: [cantBackGuard]},
  { path: 'login', 
    children: [{path: 'forgotPass', title: 'Quên Mật Khẩu', component: ForgotPassComponent}]
   },
  { path: 'student', title: 'Sinh Viên', component: StudentDashboardComponent, canActivate: [studentGuard]},
  {
    path: 'student', canActivate: [studentGuard],
    children: [
      { path: 'calendar', title: 'Lịch Thi', component: CalenderComponent },
      { path: 'exam/:id', component:ExamComponent }
    ],
  },
  { path: 'teacher', title: 'Giảng Viên', component: TeacherDashboardComponent, canActivate: [teacherGuard]},
  { path: 'teacher', canActivate: [teacherGuard],
    children: [
      { path: 'viewQuestion', title: 'Xem Câu Hỏi', component: ViewQuestionComponent},
      { path: 'import', title: 'Nhập File', component: AddQuestionComponent}
    ]
  },
  { path: '**', title: '404', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
