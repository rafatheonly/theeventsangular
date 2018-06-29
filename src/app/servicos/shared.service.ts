import { UsuarioService } from './usuario/usuario.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Injectable()
export class SharedService {

  public static instance: SharedService = null;
  usuario: Usuario;
  token: string;
  showTemplate = new EventEmitter<boolean>();

  constructor() {
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new SharedService();
    }
    return this.instance;
  }

  isLoggedIn(): boolean {
    if (this.usuario == null) {
      return false;
    }
    //SE TIVER UM E-MAIL RETORNA true (VERDADEIRO) POR Q ESTA LOGADO
    return this.usuario.email != '';
  }
}