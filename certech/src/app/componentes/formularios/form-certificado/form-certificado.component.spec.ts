import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCertificadoComponent } from './form-certificado.component';

describe('FormCertificadoComponent', () => {
  let component: FormCertificadoComponent;
  let fixture: ComponentFixture<FormCertificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCertificadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
