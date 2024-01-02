import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggestudianteComponent } from './aggestudiante.component';

describe('AggestudianteComponent', () => {
  let component: AggestudianteComponent;
  let fixture: ComponentFixture<AggestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggestudianteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AggestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
