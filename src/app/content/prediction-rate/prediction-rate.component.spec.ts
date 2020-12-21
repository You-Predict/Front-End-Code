import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionRateComponent } from './prediction-rate.component';

describe('PredictionRateComponent', () => {
  let component: PredictionRateComponent;
  let fixture: ComponentFixture<PredictionRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
