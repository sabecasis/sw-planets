import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetTableComponent } from './planet-table.component';

describe('PlanetTableComponent', () => {
  let component: PlanetTableComponent;
  let fixture: ComponentFixture<PlanetTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
