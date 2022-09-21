import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeformComponent } from './codeform.component';

describe('CodeformComponent', () => {
  let component: CodeformComponent;
  let fixture: ComponentFixture<CodeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
