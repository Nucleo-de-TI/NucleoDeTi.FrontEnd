import { TestBed } from '@angular/core/testing';

import { HomePageFooterService } from './home-page-footer.service';

describe('HomePageFooterService', () => {
  let service: HomePageFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePageFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
