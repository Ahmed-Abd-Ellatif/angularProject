import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  constructor() { }
  // data="";
  // doctors:any[]=
  // [
  //   {
  //     name:"ahmed mahmoud" ,
  //      address:'Portsaid' ,
  //      gender:'Male',
  //      subjects:["Network","OS","Math"],
  //      imgUrl:'assets/man.png'
  //     },
  //     {
  //     name:"fatma elzahra" ,
  //      address:'Egypt' ,
  //      gender:'Female',
  //      subjects:["Seince","AI"],
  //      imgUrl:'assets/women.png'
  //     },
  //     {
  //     name:"mohamed khaled" ,
  //      address:'Portsaid' ,
  //      gender:'Female',
  //      subjects:["Seince","AI"],
  //      imgUrl:''
  //     }
  // ];
  // result=this.doctors;

  ngOnInit(): void {
  }
//   doctorFilter(){
//  this.result = this.doctors.filter((doctor)=>doctor.name.includes(this.data));
// //  this.result = this.doctors.filter((doctor)=>doctor.address.includes(this.data));
// }
}
