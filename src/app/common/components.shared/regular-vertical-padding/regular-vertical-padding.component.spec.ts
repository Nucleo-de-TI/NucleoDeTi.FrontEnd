import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularVerticalPaddingComponent } from './regular-vertical-padding.component';

describe('RegularVerticalPaddingComponent', () => {
  let component: RegularVerticalPaddingComponent;
  let fixture: ComponentFixture<RegularVerticalPaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularVerticalPaddingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularVerticalPaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
