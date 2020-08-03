import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

//Inserir o Provider
describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CalculadoraService
    ]
  }));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });
});
