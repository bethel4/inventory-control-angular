import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedetialComponent } from './purchasedetial.component';

describe('PurchasedetialComponent', () => {
  let component: PurchasedetialComponent;
  let fixture: ComponentFixture<PurchasedetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasedetialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
