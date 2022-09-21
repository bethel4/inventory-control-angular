import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplierformComponent } from './suplierform.component';

describe('SuplierformComponent', () => {
  let component: SuplierformComponent;
  let fixture: ComponentFixture<SuplierformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuplierformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuplierformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
