import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCertificadoComponent } from './seccion-certificado.component';

describe('SeccionCertificadoComponent', () => {
  let component: SeccionCertificadoComponent;
  let fixture: ComponentFixture<SeccionCertificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionCertificadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
