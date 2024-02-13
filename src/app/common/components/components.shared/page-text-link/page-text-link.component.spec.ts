import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTextLinkComponent } from './page-text-link.component';

describe('PageTextLinkComponent', () => {
  let component: PageTextLinkComponent;
  let fixture: ComponentFixture<PageTextLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTextLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageTextLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
