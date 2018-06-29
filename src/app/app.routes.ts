import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';
import { HomeComponent } from './componentes/home/home.component';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { PrincipalComponent } from './componentes/principal/principal.component';
import { LoginComponent } from "./componentes/seguranca/login/login.component";
import { AuthGuard } from './componentes/seguranca/auth.guard';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { EventoComponent } from './componentes/evento/evento.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { ConvidadoComponent } from './componentes/convidado/convidado.component';
import { ConvidadosComponent } from './componentes/convidados/convidados.component';

export const ROUTES: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'detalhes/:id', component: DetalhesComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard] },
    { path: 'usuario/:id', component: UsuarioComponent, canActivate: [AuthGuard] },
    { path: 'evento', component: EventoComponent, canActivate: [AuthGuard] },
    { path: 'eventos', component: EventosComponent, canActivate: [AuthGuard] },
    { path: 'evento/:id', component: EventoComponent, canActivate: [AuthGuard] },
    { path: 'convidado/:id', component: ConvidadoComponent, canActivate: [AuthGuard] },
    { path: 'convidados/:id', component: ConvidadosComponent, canActivate: [AuthGuard] }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);