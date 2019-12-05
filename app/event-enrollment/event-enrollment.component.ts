import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-event-enrollment',
  templateUrl: './event-enrollment.component.html',
  styleUrls: ['./event-enrollment.component.css']
})
export class EventEnrollmentComponent implements OnInit {
  events: any;

  constructor(private service: UserService) {
  }

  ngOnInit() {
    this.service.getAllEvents().subscribe( (result: any) => {console.log(result); this.events = result; });
  }

}
