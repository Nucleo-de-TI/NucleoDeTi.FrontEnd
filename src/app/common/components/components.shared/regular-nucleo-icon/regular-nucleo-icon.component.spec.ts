import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularNucleoIconComponent } from './regular-nucleo-icon.component';

describe('RegularNucleoIconComponent', () => {
  let component: RegularNucleoIconComponent;
  let fixture: ComponentFixture<RegularNucleoIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularNucleoIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularNucleoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
