import { TestBed } from '@angular/core/testing';

import { FuncionesGeneralesService } from './funciones-generales.service';

describe('FuncionesGeneralesService', () => {
  let service: FuncionesGeneralesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionesGeneralesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
