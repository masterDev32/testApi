/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiBackEndService } from './api-back-end.service';

describe('ApiBackEndService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiBackEndService]
    });
  });

  it('should ...', inject([ApiBackEndService], (service: ApiBackEndService) => {
    expect(service).toBeTruthy();
  }));
});
