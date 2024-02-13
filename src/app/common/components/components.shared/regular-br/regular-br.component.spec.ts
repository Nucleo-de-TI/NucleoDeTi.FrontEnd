import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularBrComponent } from './regular-br.component';

describe('RegularBrComponent', () => {
  let component: RegularBrComponent;
  let fixture: ComponentFixture<RegularBrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularBrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularBrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
