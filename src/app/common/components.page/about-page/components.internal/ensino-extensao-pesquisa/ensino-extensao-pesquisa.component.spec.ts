import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsinoExtensaoPesquisaComponent } from './ensino-extensao-pesquisa.component';

describe('EnsinoExtensaoPesquisaComponent', () => {
  let component: EnsinoExtensaoPesquisaComponent;
  let fixture: ComponentFixture<EnsinoExtensaoPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnsinoExtensaoPesquisaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnsinoExtensaoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
