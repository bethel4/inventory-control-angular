import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasswordformComponent } from './forgetpasswordform.component';

describe('ForgetpasswordformComponent', () => {
  let component: ForgetpasswordformComponent;
  let fixture: ComponentFixture<ForgetpasswordformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetpasswordformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpasswordformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
