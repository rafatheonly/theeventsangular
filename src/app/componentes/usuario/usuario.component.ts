import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../modelos/usuario';
import { UsuarioService } from '../../servicos/usuario/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { ResponseApi } from '../../modelos/response-api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @ViewChild("form")
  form: NgForm;

  usuario = new Usuario(null, '', '', '', '', '', '', null);
  message: {};
  classCss: {};
  tituloForm: string = "Criar nova conta";

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id: number = this.route.snapshot.params['id'];
    if (id != -1) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.usuarioService.findById(id).subscribe((responseApi: ResponseApi) => {
      this.usuario = responseApi.data;
      this.usuario.senha = '';
      this.tituloForm = "Edição do usuário";
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  register() {
    this.message = {};
    this.usuarioService.createOrUpdate(this.usuario).subscribe((responseApi: ResponseApi) => {
      this.usuario = new Usuario(null, '', '', '', '', '', '', null);
      //GUARDA O USUARIO Q RETORNA DA API, COM ISSO QER DIZER Q CADASTROU CORRETAMENTE
      let userRet: Usuario = responseApi.data;
      this.form.resetForm();
      this.showMessage({
        type: 'success',
        text: `Registered ${userRet.email} successfully`
      });
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  getFormGroupClass(isInvalid: boolean, isDirty: boolean): {} {
    return {
      'form-group': true,
      'has-error': isInvalid && isDirty,
      'has-success': !isInvalid && isDirty
    };
  }

  private showMessage(message: { type: string, text: string }): void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
    }, 3000);
  }

  private buildClasses(type: string): void {
    this.classCss = {
      'alert': true
    }
    this.classCss['alert-' + type] = true;
  }
}
