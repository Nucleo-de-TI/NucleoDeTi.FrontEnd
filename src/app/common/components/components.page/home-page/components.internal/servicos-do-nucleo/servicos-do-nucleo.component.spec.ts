import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosDoNucleoComponent } from './servicos-do-nucleo.component';

describe('ServicosDoNucleoComponent', () => {
  let component: ServicosDoNucleoComponent;
  let fixture: ComponentFixture<ServicosDoNucleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosDoNucleoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicosDoNucleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
