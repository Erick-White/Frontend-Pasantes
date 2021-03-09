import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPasantesComponent } from './lista-pasantes.component';

describe('ListaPasantesComponent', () => {
  let component: ListaPasantesComponent;
  let fixture: ComponentFixture<ListaPasantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPasantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPasantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
