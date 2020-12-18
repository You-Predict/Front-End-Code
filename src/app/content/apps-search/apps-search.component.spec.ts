import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsSearchComponent } from './apps-search.component';

describe('AppsSearchComponent', () => {
  let component: AppsSearchComponent;
  let fixture: ComponentFixture<AppsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
