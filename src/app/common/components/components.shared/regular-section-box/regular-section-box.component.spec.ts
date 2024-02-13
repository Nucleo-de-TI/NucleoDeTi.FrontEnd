import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularSectionBoxComponent } from './regular-section-box.component';

describe('RegularSectionBoxComponent', () => {
  let component: RegularSectionBoxComponent;
  let fixture: ComponentFixture<RegularSectionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularSectionBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularSectionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
