import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularTextInputComponent } from './regular-text-input.component';

describe('RegularTextInputComponent', () => {
  let component: RegularTextInputComponent;
  let fixture: ComponentFixture<RegularTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularTextInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
