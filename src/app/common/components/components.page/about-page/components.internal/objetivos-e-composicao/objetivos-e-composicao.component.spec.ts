import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosEComposicaoComponent } from './objetivos-e-composicao.component';

describe('ObjetivosEComposicaoComponent', () => {
  let component: ObjetivosEComposicaoComponent;
  let fixture: ComponentFixture<ObjetivosEComposicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjetivosEComposicaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjetivosEComposicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
