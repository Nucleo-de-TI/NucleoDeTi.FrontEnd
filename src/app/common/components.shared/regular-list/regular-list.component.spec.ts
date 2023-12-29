import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularListComponent } from './regular-list.component';

describe('RegularListComponent', () => {
  let component: RegularListComponent;
  let fixture: ComponentFixture<RegularListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
