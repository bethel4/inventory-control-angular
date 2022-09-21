import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleorderformComponent } from './saleorderform.component';

describe('PurchaseorderformComponent', () => {
  let component: SaleorderformComponent;
  let fixture: ComponentFixture<SaleorderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleorderformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleorderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
