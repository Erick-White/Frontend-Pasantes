import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasanteHomeComponent } from './pasante-home.component';

describe('PasanteHomeComponent', () => {
  let component: PasanteHomeComponent;
  let fixture: ComponentFixture<PasanteHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasanteHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasanteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
