import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { AngularFireModule} from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { StudentComponent } from './pages/student/student.component';
import { EventsComponent } from './pages/events/events.component';
import { AffairsComponent } from './pages/affairs/affairs.component';
import { EditdoctorComponent } from './pages/affairs/editdoctor/editdoctor.component';
import { EditstudentComponent } from './pages/affairs/editstudent/editstudent.component';
import { CreateeventComponent } from './pages/affairs/createevent/createevent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    HomeComponent,
    DoctorsComponent,
    StudentComponent,
    EventsComponent,
    AffairsComponent,
    EditdoctorComponent,
    EditstudentComponent,
    CreateeventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
