import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Producto } from '../Producto';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionesGeneralesService } from '../funciones-generales.service';
import { CestaService } from '../cesta.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  producto: Producto | undefined;
  cantidad: number = 1;


  constructor(
    private serviceProductos: ProductosService,
    private route: ActivatedRoute,
    private router: Router,
    private serviceCesta: CestaService,
    public serviceFunciones: FuncionesGeneralesService
    ) { }


  async ngOnInit() {

    window.scrollTo(0, 0);

    this.getInformacionProducto();

  }


  async getInformacionProducto() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      const productoEspecifico = await this.serviceProductos.getProductoPorId(parseInt(id));
      if (productoEspecifico !== undefined) {
        this.producto = productoEspecifico;
      } else {
        this.router.navigate(['']);
      }
    } else {
      this.router.navigate(['']);
    }
  }


  sumarCantidad(): void {
    this.cantidad ++;
  }

  restarCantidad(): void {
    if (this.cantidad > 1) {
      this.cantidad --;
    }
  }


  comprobarCantidadYAnadirCesta(): void {
    for (let i = 0; i < this.cantidad; i++) {
      this.serviceCesta.addArticuloCesta(this.producto!);
    }
  }
  



}
