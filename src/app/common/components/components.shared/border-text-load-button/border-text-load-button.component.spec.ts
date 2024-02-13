import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderTextLoadButtonComponent } from './border-text-load-button.component';

describe('BorderTextLoadButtonComponent', () => {
  let component: BorderTextLoadButtonComponent;
  let fixture: ComponentFixture<BorderTextLoadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorderTextLoadButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BorderTextLoadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
