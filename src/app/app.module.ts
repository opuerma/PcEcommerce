import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel3';
import { MatExpansionModule } from '@angular/material/expansion';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CestaComponent } from './cesta/cesta.component';
import { IntroComponent } from './home/intro/intro.component';
import { OfertasComponent } from './home/ofertas/ofertas.component';
import { RecomendacionesComponent } from './home/recomendaciones/recomendaciones.component';
import { BlogComponent } from './home/blog/blog.component';
import { SorteoComponent } from './sorteo/sorteo.component';
import { ProductoComponent } from './producto/producto.component';
import { RouteReuseStrategy } from '@angular/router';
import { EstrategiaRouteReuse } from './EstrategiaRouteReuse';
import { CestaService } from './cesta.service';
import { FuncionesGeneralesService } from './funciones-generales.service';
import { ProductosService } from './productos.service';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { MenuMovilComponent } from './menu-movil/menu-movil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CestaComponent,
    IntroComponent,
    OfertasComponent,
    RecomendacionesComponent,
    BlogComponent,
    SorteoComponent,
    ProductoComponent,
    CategoriasComponent,
    CategoriaComponent,
    MenuMovilComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    IvyCarouselModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: EstrategiaRouteReuse },
    CestaService,
    FuncionesGeneralesService,
    ProductosService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
