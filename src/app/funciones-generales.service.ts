import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesGeneralesService {

  constructor() { }

  
  formatearNumero(numero: number): string {
    return numero.toString().replace('.', ',');
  }


  truncarNumero(numero: number): number {
    return Math.trunc(numero);
  }


  tieneDecimales(numero: number): boolean {
    return numero % 1 !== 0;
  }


  getIteraciones(numero: number): number[] {
    return Array(numero).fill(0);
  }
    

  
}
