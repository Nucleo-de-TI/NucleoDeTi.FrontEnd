import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipesDaComposicaoComponent } from './equipes-da-composicao.component';

describe('EquipesDaComposicaoComponent', () => {
  let component: EquipesDaComposicaoComponent;
  let fixture: ComponentFixture<EquipesDaComposicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipesDaComposicaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipesDaComposicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
