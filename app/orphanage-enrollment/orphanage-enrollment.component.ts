import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-orphanage-enrollment',
  templateUrl: './orphanage-enrollment.component.html',
  styleUrls: ['./orphanage-enrollment.component.css']
})
export class OrphanageEnrollmentComponent implements OnInit {
 
  orphanages: any;

  constructor(private service: UserService) {
  }

  ngOnInit() {
    this.service.getAllOrphanages().subscribe( (result: any) => {console.log(result); this.orphanages = result; });
  }

}
