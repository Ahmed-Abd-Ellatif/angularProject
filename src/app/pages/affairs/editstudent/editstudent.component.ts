import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  constructor() { }
  data="";
  student:any[]=
  [
    {
      name:"ahmed mahmoud" ,
       address:'Portsaid' ,
       gender:'Male',
       grade:"Fourth Grade",
       imgUrl:'assets/man.png'
      },
      {
      name:"fatma elzahra" ,
       address:'Egypt' ,
       gender:'Female',
       grade:"Therd Grade",
       imgUrl:'assets/women.png'
      },
      {
      name:"mohamed mahmoud" ,
       address:'Portsaid' ,
       gender:'Male',
       grade:"First Grade",
       imgUrl:''
      },
      {
      name:"khaled mahmoud" ,
       address:'Portsaid' ,
       gender:'Male',
       grade:"Second Grade",
       imgUrl:'assets/khaled.jpg'
      }
  ];
  result=this.student;

  ngOnInit(): void {
  }
  studentFilter(){
 this.result = this.student.filter((stu)=>stu.name.includes(this.data));
//  this.result = this.doctors.filter((doctor)=>doctor.address.includes(this.data));
}

}
