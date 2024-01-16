import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminoycondicionComponent } from './terminoycondicion.component';

describe('TerminoycondicionComponent', () => {
  let component: TerminoycondicionComponent;
  let fixture: ComponentFixture<TerminoycondicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminoycondicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminoycondicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
