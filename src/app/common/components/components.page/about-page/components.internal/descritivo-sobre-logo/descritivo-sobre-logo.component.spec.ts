import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescritivoSobreLogoComponent } from './descritivo-sobre-logo.component';

describe('DescritivoSobreLogoComponent', () => {
  let component: DescritivoSobreLogoComponent;
  let fixture: ComponentFixture<DescritivoSobreLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescritivoSobreLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescritivoSobreLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
