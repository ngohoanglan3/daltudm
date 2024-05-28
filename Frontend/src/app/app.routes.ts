import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentDashboardComponent } from './Dashboard/Student/student-dashboard/student-dashboard.component';
import { CalenderComponent } from './Dashboard/Student/calender/calender.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './LoginComponent/login/login.component';
import { routeGuardGuard } from './Service/route-guard.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', title: 'Đăng Nhập', component: LoginComponent },
  { path: 'student', title: 'Sinh Viên', component: StudentDashboardComponent, canActivate: [routeGuardGuard]},
  {
    path: 'student',
    children: [{ path: 'calendar', component: CalenderComponent }],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
