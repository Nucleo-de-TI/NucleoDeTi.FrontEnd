import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderTextLinkComponent } from './border-text-link.component';

describe('BorderTextLinkComponent', () => {
  let component: BorderTextLinkComponent;
  let fixture: ComponentFixture<BorderTextLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorderTextLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BorderTextLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
