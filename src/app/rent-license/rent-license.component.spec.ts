import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentLicenseComponent } from './rent-license.component';

describe('RentLicenseComponent', () => {
  let component: RentLicenseComponent;
  let fixture: ComponentFixture<RentLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentLicenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
