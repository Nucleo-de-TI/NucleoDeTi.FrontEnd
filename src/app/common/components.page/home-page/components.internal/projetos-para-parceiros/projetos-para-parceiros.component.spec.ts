import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosParaParceirosComponent } from './projetos-para-parceiros.component';

describe('ProjetosParaParceirosComponent', () => {
  let component: ProjetosParaParceirosComponent;
  let fixture: ComponentFixture<ProjetosParaParceirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosParaParceirosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetosParaParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
