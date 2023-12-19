import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEvenComponent } from './form-even.component';

describe('FormEvenComponent', () => {
  let component: FormEvenComponent;
  let fixture: ComponentFixture<FormEvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEvenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
