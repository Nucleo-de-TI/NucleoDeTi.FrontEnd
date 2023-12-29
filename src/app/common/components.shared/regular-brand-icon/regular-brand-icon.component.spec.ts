import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularBrandIconComponent } from './regular-brand-icon.component';

describe('RegularBrandIconComponent', () => {
  let component: RegularBrandIconComponent;
  let fixture: ComponentFixture<RegularBrandIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularBrandIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularBrandIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
