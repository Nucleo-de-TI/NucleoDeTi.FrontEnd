import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularFlexBoxComponent } from './regular-flex-box.component';

describe('RegularFlexBoxComponent', () => {
  let component: RegularFlexBoxComponent;
  let fixture: ComponentFixture<RegularFlexBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularFlexBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularFlexBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
