import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSectionBoxTitleComponent } from './small-section-box-title.component';

describe('SmallSectionBoxTitleComponent', () => {
  let component: SmallSectionBoxTitleComponent;
  let fixture: ComponentFixture<SmallSectionBoxTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallSectionBoxTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallSectionBoxTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
