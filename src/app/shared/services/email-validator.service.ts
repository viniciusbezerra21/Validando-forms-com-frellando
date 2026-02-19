import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService {
  private emailsCadastrados = [
    'usuario1@dominio1.com.br',
    'usuario2@dominio2.com.br',
    'teste@exemplo.com',
    'admin@exemplo.com',
    'contato@exemplo.com'
  ]

  verificarEmailExitente(email: string): Observable<boolean> {
    return of(this.emailsCadastrados.includes(email.toLowerCase())).pipe(delay(1500));
  }
}
