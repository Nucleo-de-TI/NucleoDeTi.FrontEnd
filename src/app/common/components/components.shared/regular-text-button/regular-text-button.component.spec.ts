import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularTextButtonComponent } from './regular-text-button.component';

describe('RegularTextButtonComponent', () => {
  let component: RegularTextButtonComponent;
  let fixture: ComponentFixture<RegularTextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularTextButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularTextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
