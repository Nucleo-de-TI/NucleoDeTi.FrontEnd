import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumTextButtonComponent } from './medium-text-button.component';

describe('MediumTextButtonComponent', () => {
  let component: MediumTextButtonComponent;
  let fixture: ComponentFixture<MediumTextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumTextButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediumTextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
