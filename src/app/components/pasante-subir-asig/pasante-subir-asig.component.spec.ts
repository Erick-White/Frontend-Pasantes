import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasanteSubirAsigComponent } from './pasante-subir-asig.component';

describe('PasanteSubirAsigComponent', () => {
  let component: PasanteSubirAsigComponent;
  let fixture: ComponentFixture<PasanteSubirAsigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasanteSubirAsigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasanteSubirAsigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
