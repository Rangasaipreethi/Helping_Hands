import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  productToBeAdded: Subject<any>;
  isUserLogged: boolean;

  constructor(private httpClient: HttpClient) {
    this.isUserLogged = false;
    this.productToBeAdded = new Subject();
  }
  setUserLoggedIn() {
    this.isUserLogged = true;
  }

  setUserLoggedIOut() {
    this.isUserLogged = false;
  }

  getUserLogged() {
    return this.isUserLogged;
  }

 
  getAllOrphanages() {
    return this.httpClient.get('RestAPI/webapi/myresource/getEmployees').pipe(retry(10));
  }

  getAllEvents() {
    return this.httpClient.get('RestAPI/webapi/myresource/getDepartments').pipe(retry(10));
  }

  registerDonate(donate: any) {
    console.log('Inside service...', ' ', donate);
    return this.httpClient.post('RestAPI/webapi/myresource/registerJ', donate);
  }
}
