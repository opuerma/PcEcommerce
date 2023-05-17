import { Injectable } from '@angular/core';
import { Producto } from './Producto';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

const categorias: string[] = [
  'Portátiles',
  'Smartphones',
  'Tablets',
  'Monitores',
  'Auriculares',
  'Televisores',
  'Impresoras'
];

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private _jsonURL = '../assets/productos.json';
  private productos: Producto[] = [];
  private productoAVer: Producto;


  constructor(private http: HttpClient, private router: Router) { }


  async getProductos(): Promise<Producto[]> {
    if (this.productos && this.productos.length > 0) {
      return this.productos;
    } else {
      const productos = await firstValueFrom(this.http.get<Producto[]>(this._jsonURL));
      this.productos = productos;
      
      return productos;
    }
  }



  async getProductoPorId(id: number): Promise<Producto | undefined> {
    if (this.productos && this.productos.length > 0) {
      const productoEncontrado = this.productos.find(producto => producto.id === id);
      if (productoEncontrado) {
        return productoEncontrado;
      }
    }
  
    const productos = await firstValueFrom(this.http.get<Producto[]>(this._jsonURL));
  
    const productoEspecifico = productos.find(producto => producto.id === id);
    if (productoEspecifico) {
      return productoEspecifico;
    }
  
    return undefined;
  }


  async getProductosPorCategoria(categoria: string): Promise<Producto[]> {
    if (this.productos && this.productos.length > 0) {
      return this.productos.filter(producto => producto.categoria === categoria);
    } else {
      const productos = await firstValueFrom(this.http.get<Producto[]>(this._jsonURL));
      this.productos = productos;
      
      return productos.filter(producto => producto.categoria === categoria);
    }
  }


  async getProductosAleatorios(cantidad: number): Promise<Producto[]> {
    if (this.productos && this.productos.length > 0) {
      return this.productos.sort(() => Math.random() - 0.5).slice(0, cantidad);
    } else {
      const productos = await firstValueFrom(this.http.get<Producto[]>(this._jsonURL));
      this.productos = productos;
      
      return this.productos.sort(() => Math.random() - 0.5).slice(0, cantidad);
    }
  }


  getCategorias(): string[] {
    return categorias;
  }



}
