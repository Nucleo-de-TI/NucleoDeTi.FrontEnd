import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSectionBoxComponent } from './big-section-box.component';

describe('BigSectionBoxComponent', () => {
  let component: BigSectionBoxComponent;
  let fixture: ComponentFixture<BigSectionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigSectionBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigSectionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
