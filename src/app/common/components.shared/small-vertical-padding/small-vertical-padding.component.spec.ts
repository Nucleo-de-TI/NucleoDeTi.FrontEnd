import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallVerticalPaddingComponent } from './small-vertical-padding.component';

describe('SmallVerticalPaddingComponent', () => {
  let component: SmallVerticalPaddingComponent;
  let fixture: ComponentFixture<SmallVerticalPaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallVerticalPaddingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallVerticalPaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
