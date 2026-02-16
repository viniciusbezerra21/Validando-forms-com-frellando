import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Estado {
  id: number;
  sigla: string;
  nome: string;
}

export interface Cidade {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root',
})
export class IbgeService {
  private readonly API_URL =
    'https://servicodados.ibge.gov.br/api/v1/bngb/padrao/{padrao}/nomesgeograficos';

  constructor(private http: HttpClient) {
    
  }
}
