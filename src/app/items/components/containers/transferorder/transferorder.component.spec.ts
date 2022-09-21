import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferorderComponent } from './transferorder.component';

describe('TransferorderComponent', () => {
  let component: TransferorderComponent;
  let fixture: ComponentFixture<TransferorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
