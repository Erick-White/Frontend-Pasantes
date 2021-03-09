import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasantePerfilComponent } from './pasante-perfil.component';

describe('PasantePerfilComponent', () => {
  let component: PasantePerfilComponent;
  let fixture: ComponentFixture<PasantePerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasantePerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasantePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
