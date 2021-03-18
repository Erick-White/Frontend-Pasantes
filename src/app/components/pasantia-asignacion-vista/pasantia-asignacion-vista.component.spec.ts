import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasantiaAsignacionVistaComponent } from './pasantia-asignacion-vista.component';

describe('PasantiaAsignacionVistaComponent', () => {
  let component: PasantiaAsignacionVistaComponent;
  let fixture: ComponentFixture<PasantiaAsignacionVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasantiaAsignacionVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasantiaAsignacionVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
