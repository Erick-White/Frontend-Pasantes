import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasanteAsignacionesComponent } from './pasante-asignaciones.component';

describe('PasanteAsignacionesComponent', () => {
  let component: PasanteAsignacionesComponent;
  let fixture: ComponentFixture<PasanteAsignacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasanteAsignacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasanteAsignacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
