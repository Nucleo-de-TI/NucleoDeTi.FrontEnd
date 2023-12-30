import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSectionBoxComponent } from './small-section-box.component';

describe('SmallSectionBoxComponent', () => {
  let component: SmallSectionBoxComponent;
  let fixture: ComponentFixture<SmallSectionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallSectionBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallSectionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
