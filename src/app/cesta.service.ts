import { Injectable } from '@angular/core';
import { Producto } from './Producto';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  cestaAbierta: boolean = false;
  articulosCesta: Producto[] = [];

  constructor(private serviceCookies: CookieService) {
    if (this.serviceCookies.check('cesta')) {
      this.articulosCesta = JSON.parse(this.serviceCookies.get('cesta'));
    }    
  }


  toggleAbrirCesta(): void {
    this.cestaAbierta = !this.cestaAbierta;
  }

  getCestaAbierta(): boolean {
    return this.cestaAbierta;
  }


  addArticuloCesta(producto: Producto): void {
    this.articulosCesta.push(producto);
    this.serviceCookies.delete('cesta');
    this.serviceCookies.set('cesta', JSON.stringify(this.articulosCesta));
  }

  getArticulosCesta(): Producto[] {
    if (this.serviceCookies.check('cesta')) {
      this.articulosCesta = JSON.parse(this.serviceCookies.get('cesta'));
      return this.articulosCesta;
    } 

    return this.articulosCesta;
  }

  deleteCesta() {
    this.serviceCookies.delete('cesta');
    this.articulosCesta = [];
    console.log('Eliminados todos los productos de la cesta.');
  }


}
