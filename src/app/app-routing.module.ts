import { CreateeventComponent } from './pages/affairs/createevent/createevent.component';
import { EditstudentComponent } from './pages/affairs/editstudent/editstudent.component';
import { EditdoctorComponent } from './pages/affairs/editdoctor/editdoctor.component';
import { AffairsComponent } from './pages/affairs/affairs.component';
import { EventsComponent } from './pages/events/events.component';
import { StudentComponent } from './pages/student/student.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'doctors',component:DoctorsComponent},
  {path:'student',component:StudentComponent},
  {path:'affairs',component:AffairsComponent,children:[
  {path:'editdoctor',component:EditdoctorComponent},
  {path:'editstudent',component:EditstudentComponent},
  {path:'createevent',component:CreateeventComponent}
]},
  {path:'events',component:EventsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
