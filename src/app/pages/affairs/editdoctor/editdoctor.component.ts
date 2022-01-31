import { DataService } from './../../../services/data.service';
import { User } from './../../../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editdoctor',
  templateUrl: './editdoctor.component.html',
  styleUrls: ['./editdoctor.component.css']
})
export class EditdoctorComponent implements OnInit {

  constructor(private _http:HttpClient , private _data:DataService) {

   }
  data='';
  doctors:User[]=
  [
    {
      name:"ahmed mahmoud" ,
       address:'Portsaid' ,
       gender:'Male',
       subject:'Network',
       imgUrl:'assets/man.png'
      },
      {
      name:"fatma elzahra" ,
       address:'Egypt' ,
       gender:'Female',
       subject:"AI",
       imgUrl:'assets/women.png'
      },
      {
      name:"mohamed khaled" ,
       address:'Portsaid' ,
       gender:'Female',
       subject:"Seince",
       imgUrl:''
      }
  ];
  result=this.doctors;

  ngOnInit(): void {
    // this._data.getDoctorData().subscribe(
    //   (doctor)=>{ this.doctors = doctor;},
    //   (err)=>console.log(err.message),
    //   ()=>{console.log('done')}
      // )
  }
// addDoctor(doctorData:any){
//   this._data.saveDoctorData(doctorData).subscribe(res=>console.log(res))
//   }



  doctorFilter(){
  this.result = this.doctors.filter((doctor)=>doctor.name.includes(this.data));
 }
}








