import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasanteCalificacionesComponent } from './pasante-calificaciones.component';

describe('PasanteCalificacionesComponent', () => {
  let component: PasanteCalificacionesComponent;
  let fixture: ComponentFixture<PasanteCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasanteCalificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasanteCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
