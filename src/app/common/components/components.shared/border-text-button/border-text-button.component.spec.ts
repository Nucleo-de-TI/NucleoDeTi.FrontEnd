import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderTextButtonComponent } from './border-text-button.component';

describe('BorderTextButtonComponent', () => {
  let component: BorderTextButtonComponent;
  let fixture: ComponentFixture<BorderTextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorderTextButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BorderTextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
