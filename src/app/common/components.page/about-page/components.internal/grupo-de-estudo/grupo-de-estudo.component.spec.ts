import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoDeEstudoComponent } from './grupo-de-estudo.component';

describe('GrupoDeEstudoComponent', () => {
  let component: GrupoDeEstudoComponent;
  let fixture: ComponentFixture<GrupoDeEstudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupoDeEstudoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrupoDeEstudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
