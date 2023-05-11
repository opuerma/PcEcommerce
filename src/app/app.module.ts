import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel3';
import { MatExpansionModule } from '@angular/material/expansion';

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
    SorteoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
