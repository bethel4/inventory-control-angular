import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchformComponent } from './branchform.component';

describe('BranchformComponent', () => {
  let component: BranchformComponent;
  let fixture: ComponentFixture<BranchformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
