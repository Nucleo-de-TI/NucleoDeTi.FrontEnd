import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularFormComponent } from './regular-form.component';

describe('RegularFormComponent', () => {
  let component: RegularFormComponent;
  let fixture: ComponentFixture<RegularFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
