import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasanteRepoVistaComponent } from './pasante-repo-vista.component';

describe('PasanteRepoVistaComponent', () => {
  let component: PasanteRepoVistaComponent;
  let fixture: ComponentFixture<PasanteRepoVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasanteRepoVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasanteRepoVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
