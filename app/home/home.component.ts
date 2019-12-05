import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showuser: any;
  User: any;
  constructor(private router: Router, private service: UserService) {
    this.showuser = {loginId :"",password :""};
    this.User = {loginId :"",password :""};
  }

  ngOnInit() {
  }
  showUser() {
    if(this.showuser.loginId === 'admin') {
      this.service.setUserLoggedIn();
      this.router.navigate(['orphanage-enrollment']);
    }
    console.log(this.showuser);
  }
  user() {
    if(this.User.loginId === 'admin') {
      this.service.setUserLoggedIn();
      this.router.navigate(['event-enrollment']);
    }
    console.log(this.User);
  }
}
  
   