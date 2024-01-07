import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularMainComponent } from './regular-main.component';

describe('RegularMainComponent', () => {
  let component: RegularMainComponent;
  let fixture: ComponentFixture<RegularMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
