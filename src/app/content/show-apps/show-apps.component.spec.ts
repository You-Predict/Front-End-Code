import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAppsComponent } from './show-apps.component';

describe('ShowAppsComponent', () => {
  let component: ShowAppsComponent;
  let fixture: ComponentFixture<ShowAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
