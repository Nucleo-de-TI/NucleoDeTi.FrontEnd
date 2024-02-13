import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGuidPageComponent } from './student-guid-page.component';

describe('StudentGuidPageComponent', () => {
  let component: StudentGuidPageComponent;
  let fixture: ComponentFixture<StudentGuidPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentGuidPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentGuidPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
