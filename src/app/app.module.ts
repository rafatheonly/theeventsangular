import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//DISPONIBILIZA O RECURSO DE CALENDARIO NO INPUT DO TIPO "p-calendar" DO PRIMENG
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//DISPONIBILIZA RECURSO DE FORMULARIO DO ANGULAR
import { FormsModule } from '@angular/forms';
//IMPORTACAO USADA P/ A CRIACAO DE ROTAS
import { RouterModule } from '@angular/router';
//IMPORTACOES USADAS P/ A VALIDACAO DO FORM S/ O PRIMENG
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//IMPORTACOES USADAS P/ O PRIMENG
import { DataTableModule, ButtonModule, InputTextModule, InputMaskModule, CalendarModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { ROUTES } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { EventoService } from './evento/evento.service';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,

    //FormsModule,
    //ReactiveFormsModule,
    DataTableModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule    
  ],
  providers: [
    EventoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
