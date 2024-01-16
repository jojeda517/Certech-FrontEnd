import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiddorInicoComponent } from './validdor-inico.component';

describe('ValiddorInicoComponent', () => {
  let component: ValiddorInicoComponent;
  let fixture: ComponentFixture<ValiddorInicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiddorInicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiddorInicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
