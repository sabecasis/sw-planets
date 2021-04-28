import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitComparisonComponent } from './orbit-comparison.component';

describe('OrbitComparisonComponent', () => {
  let component: OrbitComparisonComponent;
  let fixture: ComponentFixture<OrbitComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrbitComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
