import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacaoDaComissaoComponent } from './formacao-da-comissao.component';

describe('FormacaoDaComissaoComponent', () => {
  let component: FormacaoDaComissaoComponent;
  let fixture: ComponentFixture<FormacaoDaComissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormacaoDaComissaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormacaoDaComissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
