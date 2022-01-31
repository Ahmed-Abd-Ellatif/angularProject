import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _http:HttpClient , private router:Router) { }

  ngOnInit(): void {
  }
  loginForm(){
    this._http.get('https://tefa-be-default-rtdb.firebaseio.com/users.json').subscribe(user=>{
      console.log(user)
      this.router.navigate(['/'])
    })
    }
 }


