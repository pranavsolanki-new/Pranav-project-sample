import { TestBed } from '@angular/core/testing';

import { HackIdeaService } from './hack-idea.service';

describe('HackIdeaService', () => {
  let service: HackIdeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackIdeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
