import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsPredictionComponent } from './apps-prediction.component';

describe('AppsPredictionComponent', () => {
  let component: AppsPredictionComponent;
  let fixture: ComponentFixture<AppsPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsPredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
