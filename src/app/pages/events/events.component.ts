import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
events:any[]=[
  {
    eventImg:"assets/e1.jpg",
    eventName:"Fun Day",
    eventDate:"25-2-2022",
    eventTitle:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    eventImg:"assets/e3.png",
    eventName:"Exam",
    eventDate:"30-5-2022",
    eventTitle:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    eventImg:"assets/e2.jpg",
    eventName:"Graduation",
    eventDate:"21-7-2022",
    eventTitle:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    eventImg:"",
    eventName:"Event",
    eventDate:"13-4-2022",
    eventTitle:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
