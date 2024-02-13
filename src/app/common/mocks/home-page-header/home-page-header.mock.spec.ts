import { TestBed } from '@angular/core/testing';
import { HomePageHeaderMock } from './home-page-header.mock';

describe('HomePageHeaderMock', () => {
  let service: HomePageHeaderMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePageHeaderMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
