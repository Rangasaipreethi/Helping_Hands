import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OrphanageEnrollmentComponent } from './orphanage-enrollment/orphanage-enrollment.component';
import { EventEnrollmentComponent } from './event-enrollment/event-enrollment.component';
import { RouterModule ,Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DonationComponent } from './donation/donation.component';
import {FormsModule} from '@angular/forms';


const appRoot: Routes=[ {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
{path:'orphanage-enrollment', canActivate:[AuthGuard],component:OrphanageEnrollmentComponent },
{path:'event-enrollment', canActivate:[AuthGuard],component:EventEnrollmentComponent },
{path:'donation',component:DonationComponent },]





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OrphanageEnrollmentComponent,
    EventEnrollmentComponent,
    DonationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoot),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
   
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
