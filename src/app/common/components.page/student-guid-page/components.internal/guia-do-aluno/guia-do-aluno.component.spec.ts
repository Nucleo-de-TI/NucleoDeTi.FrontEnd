import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaDoAlunoComponent } from './guia-do-aluno.component';

describe('GuiaDoAlunoComponent', () => {
  let component: GuiaDoAlunoComponent;
  let fixture: ComponentFixture<GuiaDoAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiaDoAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuiaDoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
