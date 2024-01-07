import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelembreComponent } from './relembre.component';

describe('RelembreComponent', () => {
  let component: RelembreComponent;
  let fixture: ComponentFixture<RelembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelembreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
