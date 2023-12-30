import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadaAcademicaComponent } from './jornada-academica.component';

describe('JornadaAcademicaComponent', () => {
  let component: JornadaAcademicaComponent;
  let fixture: ComponentFixture<JornadaAcademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JornadaAcademicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JornadaAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
