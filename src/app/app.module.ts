import { EventoService } from './servicos/evento/evento.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { LoginComponent } from './componentes/seguranca/login/login.component';
import { UsuarioService } from './servicos/usuario/usuario.service';
import { SharedService } from './servicos/shared.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routes } from './app.routes';
import { HomeComponent } from './componentes/home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthGuard } from './componentes/seguranca/auth.guard';
import { AuthInterceptor } from './componentes/seguranca/auth.interceptor';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { DialogService } from './dialog.service';
import { EventoComponent } from './componentes/evento/evento.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { ConvidadoService } from './servicos/convidado/convidado.service';
import { ConvidadoComponent } from './componentes/convidado/convidado.component';
import { ConvidadosComponent } from './componentes/convidados/convidados.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    LoginComponent,
    HomeComponent,
    DetalhesComponent,
    RodapeComponent,
    UsuarioComponent,
    UsuariosComponent,
    EventoComponent,
    EventosComponent,
    ConvidadoComponent,
    ConvidadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    NgxPaginationModule,
    TooltipModule.forRoot()
  ],
  providers: [
    UsuarioService,
    AuthGuard,
    SharedService,
    EventoService,
    ConvidadoService,
    DialogService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
