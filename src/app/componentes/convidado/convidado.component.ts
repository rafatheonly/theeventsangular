import { EventoService } from './../../servicos/evento/evento.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Convidado } from '../../modelos/convidado';
import { ConvidadoService } from '../../servicos/convidado/convidado.service';
import { ResponseApi } from '../../modelos/response-api';
import { SharedService } from '../../servicos/shared.service';
import { Evento } from '../../modelos/evento';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-convidado',
  templateUrl: './convidado.component.html',
  styleUrls: ['./convidado.component.css']
})
export class ConvidadoComponent implements OnInit {

  @ViewChild("form")
  form: NgForm;

  convidado = new Convidado(null, '', '', null, null);
  evento = new Evento(null, '', '', '', '', '', null, null, null);  
  shared: SharedService;  
  message: {};
  classCss: {}; 

  constructor(
    private convidadoService: ConvidadoService,
    private eventoService: EventoService,
    private route: ActivatedRoute,
    ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    let id: number = this.route.snapshot.params['id'];    
    if (id != -1) {
      this.findById(id);
    }
  }

  findById(id: number) {
    console.log('id --> ', id);
    this.eventoService.findById(id).subscribe((responseApi: ResponseApi) => {
      console.log('responseApi -->  ', responseApi);
      this.evento = responseApi.data;
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  register(id: number) {
    console.log('id --> ', id);
    this.message = {};   
    this.convidado.evento = new Evento(id, '', '', '', '', '', null, null, null);
    this.convidado.usuario = this.shared.usuario;
    this.convidadoService.createOrUpdate(this.convidado).subscribe((responseApi: ResponseApi) => {
      console.log('responseApi -->  ', responseApi);
      this.convidado = new Convidado(null, '', '', null, null);
      //GUARDA O USUARIO Q RETORNA DA API, COM ISSO QER DIZER Q CADASTROU CORRETAMENTE
      let convidadoRet: Convidado = responseApi.data;
      this.form.resetForm();
      this.showMessage({
        type: 'success',
        text: `Registered ${convidadoRet.nome} successfully`
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
