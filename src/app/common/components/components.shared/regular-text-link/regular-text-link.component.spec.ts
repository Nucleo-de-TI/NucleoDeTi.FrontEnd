import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularTextLinkComponent } from './regular-text-link.component';

describe('RegularTextLinkComponent', () => {
  let component: RegularTextLinkComponent;
  let fixture: ComponentFixture<RegularTextLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularTextLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularTextLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
