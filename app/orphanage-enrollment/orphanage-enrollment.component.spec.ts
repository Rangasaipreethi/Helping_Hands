import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanageEnrollmentComponent } from './orphanage-enrollment.component';

describe('OrphanageEnrollmentComponent', () => {
  let component: OrphanageEnrollmentComponent;
  let fixture: ComponentFixture<OrphanageEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrphanageEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrphanageEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
