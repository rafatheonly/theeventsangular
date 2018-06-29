import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../modelos/usuario';
import { SharedService } from '../../../servicos/shared.service';
import { UsuarioService } from '../../../servicos/usuario/usuario.service';
import { Router } from '@angular/router';
import { CurrentUser } from '../../../modelos/current-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario(null, '', '', '', '', '', '', null);
  shared: SharedService;
  message: string;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) {
    this.shared = SharedService.getInstance();
    this.shared.showTemplate.emit(false);
  }

  ngOnInit() {
  }


  login() {
    this.message = '';
    this.usuarioService.login(this.usuario).subscribe((userAuthentication: CurrentUser) => {
      this.shared.token = userAuthentication.token;
      this.shared.usuario = userAuthentication.usuario;
      this.shared.usuario.perfil = this.shared.usuario.perfil.substring(5);
      this.shared.showTemplate.emit(true);
      this.router.navigate(['/home']);
    }, err => {
      this.shared.token = null;
      this.shared.usuario = null;
      this.shared.showTemplate.emit(false);
      this.message = 'Erro ';
    });
  }

  /**cancelLogin(){
    this.message = '';
    this.usuario = new Usuario(null,'','','','','','',null);
    window.location.href = '/login';
    window.location.reload();
  }**/

  getFormGroupClass(isInvalid: boolean, isDirty: boolean): {} {
    return {
      'form-group': true,
      'has-error': isInvalid && isDirty,
      'has-success': !isInvalid && isDirty
    };
  }

}
