import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Producto';
import { FuncionesGeneralesService } from 'src/app/funciones-generales.service';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.scss']
})
export class RecomendacionesComponent implements OnInit {

  categorias: string[] = [];
  productos: Producto[] = [];


  constructor(
    public serviceProductos: ProductosService,
    public serviceFunciones: FuncionesGeneralesService )
    {
      this.categorias = this.serviceProductos.getCategorias();
    }


  async ngOnInit() {
    this.productos = await this.serviceProductos.getProductos();
  }


}
