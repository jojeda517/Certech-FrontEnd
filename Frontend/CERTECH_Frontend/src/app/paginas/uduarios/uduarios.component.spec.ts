import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UduariosComponent } from './uduarios.component';

describe('UduariosComponent', () => {
  let component: UduariosComponent;
  let fixture: ComponentFixture<UduariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UduariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UduariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
