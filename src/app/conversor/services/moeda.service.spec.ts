import { TestBed } from '@angular/core/testing';

import { MoedaService } from './moeda.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('MoedaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
    ],
    providers: [MoedaService]
  }));

  it('should be created', () => {
    const service: MoedaService = TestBed.get(MoedaService);
    expect(service).toBeTruthy();
  });
});
