import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigVerticalPaddingComponent } from './big-vertical-padding.component';

describe('BigVerticalPaddingComponent', () => {
  let component: BigVerticalPaddingComponent;
  let fixture: ComponentFixture<BigVerticalPaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigVerticalPaddingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigVerticalPaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
