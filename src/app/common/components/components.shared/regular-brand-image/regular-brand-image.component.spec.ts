import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularBrandImageComponent } from './regular-brand-image.component';

describe('RegularBrandImageComponent', () => {
  let component: RegularBrandImageComponent;
  let fixture: ComponentFixture<RegularBrandImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularBrandImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularBrandImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
