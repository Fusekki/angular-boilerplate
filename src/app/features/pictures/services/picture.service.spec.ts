import { TestBed } from '@angular/core/testing';

import { Pictures } from './picture.service';

describe('Pictures', () => {
  let service: Pictures;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pictures);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
