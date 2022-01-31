import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-affairs',
  templateUrl: './affairs.component.html',
  styleUrls: ['./affairs.component.css']
})
export class AffairsComponent implements OnInit {

  constructor(private router:Router , private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }
  // =======Doctors========
  gotoEditDoctor(){
    this.router.navigate(['editdoctor'],{relativeTo:this.activatedRouter})
  }
  // =======Student========
  gotoEditStudent(){
    this.router.navigate(['editstudent'],{relativeTo:this.activatedRouter})
  }
  // =======Create Event========
  gotoEditCreateEvent(){
    this.router.navigate(['createevent'],{relativeTo:this.activatedRouter})
  }

}
