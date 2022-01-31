import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Event, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data="";
  posts:any[]=[
    'how Are you'
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  addPost(){
      if(this.data === ''){
        alert("Enter your Post");
      }else{
        this.posts.push(this.data)
      }
  }
  delPost(e:any){
    const index = this.posts.indexOf(e)
    this.posts.splice(index,1)


  }


}
