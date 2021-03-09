import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasantiaAsignacionComponent } from './pasantia-asignacion.component';

describe('PasantiaAsignacionComponent', () => {
  let component: PasantiaAsignacionComponent;
  let fixture: ComponentFixture<PasantiaAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasantiaAsignacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasantiaAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
