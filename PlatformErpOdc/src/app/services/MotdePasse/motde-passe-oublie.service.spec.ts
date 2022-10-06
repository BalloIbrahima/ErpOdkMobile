import { TestBed } from '@angular/core/testing';

import { MotdePasseOublieService } from './motde-passe-oublie.service';

describe('MotdePasseOublieService', () => {
  let service: MotdePasseOublieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotdePasseOublieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
