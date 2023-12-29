import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumTextLinkComponent } from './medium-text-link.component';

describe('MediumTextLinkComponent', () => {
  let component: MediumTextLinkComponent;
  let fixture: ComponentFixture<MediumTextLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumTextLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediumTextLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
