import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularTextComponent } from './regular-text.component';

describe('RegularTextComponent', () => {
  let component: RegularTextComponent;
  let fixture: ComponentFixture<RegularTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
