import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaledetialComponent } from './saledetial.component';

describe('PurchasedetialComponent', () => {
  let component: SaledetialComponent;
  let fixture: ComponentFixture<SaledetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaledetialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaledetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
