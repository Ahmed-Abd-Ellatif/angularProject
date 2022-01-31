import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
  }
  signUpForm(signUpData:NgForm){
    this._http.post('https://tefa-be-default-rtdb.firebaseio.com/users.json',signUpData.value).subscribe((res)=>{
      console.log(res);
      // this.loginForm.reset();
    },
    (error)=>{
      console.log(error)

  })
}
}


