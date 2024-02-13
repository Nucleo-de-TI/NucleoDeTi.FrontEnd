import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularAccordionComponent } from './regular-accordion.component';

describe('RegularAccordionComponent', () => {
  let component: RegularAccordionComponent;
  let fixture: ComponentFixture<RegularAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
