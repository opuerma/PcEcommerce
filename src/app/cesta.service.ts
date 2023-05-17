import { Injectable } from '@angular/core';
import { Producto } from './Producto';
import { CookieService } from 'ngx-cookie-service';
import { FuncionesGeneralesService } from './funciones-generales.service';

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  cestaAbierta: boolean = false;
  articulosCesta: { producto: Producto, cantidad: number }[] = [];
  fechaActual = new Date();
  fechaMasUnaSemana = new Date();
  unaSemanaEnMilisegundos = 7 * 24 * 60 * 60 * 1000;

  constructor(private serviceCookies: CookieService, private serviceFunciones: FuncionesGeneralesService) {
    if (this.serviceCookies.check('cesta')) {
      this.articulosCesta = JSON.parse(this.serviceCookies.get('cesta'));
    }

    this.fechaMasUnaSemana = new Date(this.fechaActual.getTime() + this.unaSemanaEnMilisegundos);
  }


  toggleAbrirCesta(): void {
    this.cestaAbierta = !this.cestaAbierta;
  }

  getCestaAbierta(): boolean {
    return this.cestaAbierta;
  }


  addArticuloCesta(producto: Producto): void {
    const productoExistente = this.articulosCesta.find(item => item.producto.id === producto.id);
    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      this.articulosCesta.push({ producto: producto, cantidad: 1 });
    }

    this.serviceCookies.set('cesta', JSON.stringify(this.articulosCesta), {expires: this.fechaMasUnaSemana, path: '/'});
  }

  
  getArticulosCesta(): { producto: Producto, cantidad: number }[] {
    if (this.serviceCookies.check('cesta')) {
      this.articulosCesta = JSON.parse(this.serviceCookies.get('cesta'));
      return this.articulosCesta;
    }

    return this.articulosCesta;
  }


  deleteProducto(producto: Producto) {
    const indice = this.articulosCesta.findIndex(item => item.producto.id === producto.id);
    if (indice !== -1) {
      this.articulosCesta.splice(indice, 1);
      this.serviceCookies.set('cesta', JSON.stringify(this.articulosCesta), {expires: this.fechaMasUnaSemana, path: '/'});
    }
  }


  getTotalUnidades(): number {
    let totalUnidades = 0;
    for (const item of this.articulosCesta) {
      totalUnidades += item.cantidad;
    }
    return totalUnidades;
  }
  

  getPrecioTotal(): string {
    let precioTotal = 0;
    for (const item of this.articulosCesta) {
      precioTotal += item.producto.precioFinal * item.cantidad;
    }
    return this.serviceFunciones.formatearNumero(precioTotal);
  }
  


}
