import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularUnisoIconComponent } from './regular-uniso-icon.component';

describe('RegularUnisoIconComponent', () => {
  let component: RegularUnisoIconComponent;
  let fixture: ComponentFixture<RegularUnisoIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularUnisoIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularUnisoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
