import { TestBed } from '@angular/core/testing';
import { HomePageFooterMock } from './home-page-footer.mock';


describe('HomePageFooterMock', () => {
  let service: HomePageFooterMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePageFooterMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
