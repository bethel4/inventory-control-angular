import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseformComponent } from './warehouseform.component';

describe('WarehouseformComponent', () => {
  let component: WarehouseformComponent;
  let fixture: ComponentFixture<WarehouseformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
