import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCenterComponent } from './courses-center.component';

describe('CoursesCenterComponent', () => {
  let component: CoursesCenterComponent;
  let fixture: ComponentFixture<CoursesCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
