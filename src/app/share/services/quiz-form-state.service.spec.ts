import { TestBed } from '@angular/core/testing';

import { QuizFormStateService } from './quiz-form-state.service';

describe('QuizFormStateService', () => {
  let service: QuizFormStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizFormStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
