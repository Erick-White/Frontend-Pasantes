import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionSubidaComponent } from './asignacion-subida.component';

describe('AsignacionSubidaComponent', () => {
  let component: AsignacionSubidaComponent;
  let fixture: ComponentFixture<AsignacionSubidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionSubidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionSubidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
