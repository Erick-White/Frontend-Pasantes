import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasanteRepoComponent } from './pasante-repo.component';

describe('PasanteRepoComponent', () => {
  let component: PasanteRepoComponent;
  let fixture: ComponentFixture<PasanteRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasanteRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasanteRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
