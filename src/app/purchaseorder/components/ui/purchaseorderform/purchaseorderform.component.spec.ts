import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseorderformComponent } from './purchaseorderform.component';

describe('PurchaseorderformComponent', () => {
  let component: PurchaseorderformComponent;
  let fixture: ComponentFixture<PurchaseorderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseorderformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseorderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
