import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceirosDoNucleoComponent } from './parceiros-do-nucleo.component';

describe('ParceirosDoNucleoComponent', () => {
  let component: ParceirosDoNucleoComponent;
  let fixture: ComponentFixture<ParceirosDoNucleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParceirosDoNucleoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParceirosDoNucleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
