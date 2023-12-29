import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigTextButtonComponent } from './big-text-button.component';

describe('BigTextButtonComponent', () => {
  let component: BigTextButtonComponent;
  let fixture: ComponentFixture<BigTextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigTextButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigTextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
