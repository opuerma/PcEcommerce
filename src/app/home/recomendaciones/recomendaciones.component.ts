import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Producto';
import { FuncionesGeneralesService } from 'src/app/funciones-generales.service';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.scss']
})
export class RecomendacionesComponent implements OnInit {
  @Input() categoriaAMostrar: string;
  @Input() titulo: string;

  categorias: string[] = [];
  productos: Producto[] = [];


  constructor(
    public serviceProductos: ProductosService,
    public serviceFunciones: FuncionesGeneralesService )
    {
      this.categorias = this.serviceProductos.getCategorias();
    }


  async ngOnInit() {
    this.productos = await this.serviceProductos.getProductosPorCategoria(this.categoriaAMostrar);
    this.productos.sort(() => Math.random() - 0.5);
  }


}
