import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganzationprofileComponent } from './organzationprofile.component';

describe('OrganzationprofileComponent', () => {
  let component: OrganzationprofileComponent;
  let fixture: ComponentFixture<OrganzationprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganzationprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganzationprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
