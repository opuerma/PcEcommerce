import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesGeneralesService {

  constructor() { }

  
  /*formatearNumero(numero: number): string {
    return numero.toString().replace('.', ',');
  }*/

  formatearNumero(numero: number): string {
    const separadorDecimal = ',';
    const separadorMiles = '.';

    const tieneDecimales = this.tieneDecimales(numero);

    const numeroFormateado = tieneDecimales
      ? numero.toFixed(2).replace('.', separadorMiles)
      : numero.toString().replace('.', separadorMiles);

    const partes = numeroFormateado.split(separadorMiles);
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, separadorMiles);

    return partes.join(separadorDecimal);
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


  primeraLetraCapital(palabra: string) {
    if (!palabra) return palabra;
    return palabra[0].toUpperCase() + palabra.substr(1).toLowerCase();
  }
    

  
}
