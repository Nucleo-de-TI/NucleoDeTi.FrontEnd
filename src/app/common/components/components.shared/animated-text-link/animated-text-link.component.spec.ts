import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedTextLinkComponent } from './animated-text-link.component';

describe('AnimatedTextLinkComponent', () => {
  let component: AnimatedTextLinkComponent;
  let fixture: ComponentFixture<AnimatedTextLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedTextLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimatedTextLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
