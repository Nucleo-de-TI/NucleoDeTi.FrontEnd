import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularSectionBoxTitleComponent } from './regular-section-box-title.component';

describe('RegularSectionBoxTitleComponent', () => {
  let component: RegularSectionBoxTitleComponent;
  let fixture: ComponentFixture<RegularSectionBoxTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularSectionBoxTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularSectionBoxTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
