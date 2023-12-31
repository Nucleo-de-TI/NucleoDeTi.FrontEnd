import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GentiComponent } from './genti.component';

describe('GentiComponent', () => {
  let component: GentiComponent;
  let fixture: ComponentFixture<GentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GentiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
