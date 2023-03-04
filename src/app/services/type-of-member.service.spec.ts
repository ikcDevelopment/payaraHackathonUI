import { TestBed } from '@angular/core/testing';

import { TypeOfMemberService } from './type-of-member.service';

describe('TypeOfMemberService', () => {
  let service: TypeOfMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOfMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
