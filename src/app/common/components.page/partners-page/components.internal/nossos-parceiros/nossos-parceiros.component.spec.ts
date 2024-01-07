import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossosParceirosComponent } from './nossos-parceiros.component';

describe('NossosParceirosComponent', () => {
  let component: NossosParceirosComponent;
  let fixture: ComponentFixture<NossosParceirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NossosParceirosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NossosParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
