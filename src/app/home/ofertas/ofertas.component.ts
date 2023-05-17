import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Producto';
import { FuncionesGeneralesService } from 'src/app/funciones-generales.service';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {

  productosEnOferta: Producto[] = [];
  imageLoader: boolean = true;


  constructor(public serviceProductos: ProductosService, public serviceFunciones: FuncionesGeneralesService) { }


  async ngOnInit() {
    this.productosEnOferta = await this.serviceProductos.getProductosAleatorios(8);
  }

}
