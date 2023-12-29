import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstuComponent } from './form-estu.component';

describe('FormEstuComponent', () => {
  let component: FormEstuComponent;
  let fixture: ComponentFixture<FormEstuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEstuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEstuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
