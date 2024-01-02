import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedSectionBoxComponent } from './animated-section-box.component';

describe('AnimatedSectionBoxComponent', () => {
  let component: AnimatedSectionBoxComponent;
  let fixture: ComponentFixture<AnimatedSectionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedSectionBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimatedSectionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
