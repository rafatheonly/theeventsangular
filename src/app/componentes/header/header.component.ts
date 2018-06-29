import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../servicos/shared.service';
import { UsuarioService } from '../../servicos/usuario/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  shared: SharedService;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) {
    this.shared = SharedService.getInstance();
    this.shared.usuario = new Usuario(null, '', '', '', '', '', '', null);
  }

  ngOnInit() {
  }

  signOut(): void {
    this.shared.token = null;
    this.shared.usuario = null;
    window.location.href = '/login';
    window.location.reload();
  }

}
