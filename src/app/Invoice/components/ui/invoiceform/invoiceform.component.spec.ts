import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceformComponent } from './invoiceform.component';

describe('InvoiceformComponent', () => {
  let component: InvoiceformComponent;
  let fixture: ComponentFixture<InvoiceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
