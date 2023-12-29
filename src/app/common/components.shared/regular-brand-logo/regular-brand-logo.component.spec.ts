import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularBrandLogoComponent } from './regular-brand-logo.component';

describe('RegularBrandLogoComponent', () => {
  let component: RegularBrandLogoComponent;
  let fixture: ComponentFixture<RegularBrandLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularBrandLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularBrandLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
