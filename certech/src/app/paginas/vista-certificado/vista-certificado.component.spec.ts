import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCertificadoComponent } from './vista-certificado.component';

describe('VistaCertificadoComponent', () => {
  let component: VistaCertificadoComponent;
  let fixture: ComponentFixture<VistaCertificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaCertificadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
