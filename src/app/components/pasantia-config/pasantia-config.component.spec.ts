import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasantiaConfigComponent } from './pasantia-config.component';

describe('PasantiaConfigComponent', () => {
  let component: PasantiaConfigComponent;
  let fixture: ComponentFixture<PasantiaConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasantiaConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasantiaConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
