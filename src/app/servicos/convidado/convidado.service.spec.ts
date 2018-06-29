import { TestBed, inject } from '@angular/core/testing';

import { ConvidadoService } from './convidado.service';

describe('ConvidadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvidadoService]
    });
  });

  it('should be created', inject([ConvidadoService], (service: ConvidadoService) => {
    expect(service).toBeTruthy();
  }));
});
