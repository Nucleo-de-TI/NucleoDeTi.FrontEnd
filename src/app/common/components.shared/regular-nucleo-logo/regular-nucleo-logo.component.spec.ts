import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularNucleoLogoComponent } from './regular-nucleo-logo.component';

describe('RegularNucleoLogoComponent', () => {
  let component: RegularNucleoLogoComponent;
  let fixture: ComponentFixture<RegularNucleoLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularNucleoLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularNucleoLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
