import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularHorizontalPaddingComponent } from './regular-horizontal-padding.component';

describe('RegularHorizontalPaddingComponent', () => {
  let component: RegularHorizontalPaddingComponent;
  let fixture: ComponentFixture<RegularHorizontalPaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularHorizontalPaddingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularHorizontalPaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
