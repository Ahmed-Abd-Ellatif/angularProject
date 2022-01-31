import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
  // data="";
  // student:any[]=
  // [
  //   {
  //     name:"ahmed mahmoud" ,
  //      address:'Portsaid' ,
  //      gender:'Male',
  //      grade:"Fourth Grade",
  //      imgUrl:'assets/man.png'
  //     },
  //     {
  //     name:"fatma elzahra" ,
  //      address:'Egypt' ,
  //      gender:'Female',
  //      grade:"Therd Grade",
  //      imgUrl:'assets/women.png'
  //     },
  //     {
  //     name:"mohamed khaled" ,
  //      address:'Portsaid' ,
  //      gender:'Male',
  //      grade:"First Grade",
  //      imgUrl:''
  //     }
  // ];
  // result=this.student;

  ngOnInit(): void {
  }
//   studentFilter(){
//  this.result = this.student.filter((stu)=>stu.name.includes(this.data));
// //  this.result = this.doctors.filter((doctor)=>doctor.address.includes(this.data));
// }

}
