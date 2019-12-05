import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

declare var toastr: any;

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  donate: any;
  message: string;
  events: any;
  orphanages: any;
  constructor(private service: UserService) {
    this.donate = {
      donateId: '',
      date: '',
      EventEnrollment: {eventId: '', eventManager: '', mobile: '',address: '',foodDescription: '',quantity: ''},
      OrphanageEnrollment: {orphanageId: '', name: '', mobile: '',address: ''}
        };
  }
  ngOnInit() {
    this.service.getAllEvents().subscribe( (result: any) => {console.log(result); this.events = result; });
    this.service.getAllOrphanages().subscribe( (result: any) => {console.log(result); this.orphanages = result; });
  }

  regEmp() {
    console.log(this.donate.eventId);
    console.log(this.donate.orphanageId);
    this.service.registerDonate(this.donate).subscribe(
      (res) => {
         // console.log('success');
         toastr.success('Reg', 'Registration Success');
      },
      (err) => { this.message = err.error.text;
                // console.log('Register Failure..');
                 toastr.success('Reg', 'Registration Failure');
      }
    );
  }

}
