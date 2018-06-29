import { Tipoevento } from './../../modelos/tipoevento';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Evento } from '../../modelos/evento';
import { EventoService } from '../../servicos/evento/evento.service';
import { ActivatedRoute } from '@angular/router';
import { ResponseApi } from '../../modelos/response-api';
import { SharedService } from '../../servicos/shared.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  @ViewChild("form")
  form: NgForm;

  evento = new Evento(null, '', '', '', '', '', null, null, null);
  shared: SharedService;
  tipoevento: string = "";
  tipo: Tipoevento;
  message: {};
  classCss: {};
  tituloForm: string = "Criar novo evento";

  constructor(
    private eventoService: EventoService,
    private route: ActivatedRoute) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    let id: number = this.route.snapshot.params['id'];
    if (id != -1) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.eventoService.findById(id).subscribe((responseApi: ResponseApi) => {
      this.evento = responseApi.data;
      this.tituloForm = "Edição do evento";
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  register() {
    this.message = {};
    this.evento.usuario = this.shared.usuario;
    if (this.tipoevento == "Junina") {
      this.tipo = new Tipoevento(1, null, null);
      this.evento.tipoevento = this.tipo;
    } else {
      this.tipo = new Tipoevento(2, null, null);
      this.evento.tipoevento = this.tipo;
    }
    this.eventoService.createOrUpdate(this.evento).subscribe((responseApi: ResponseApi) => {
      this.evento = new Evento(null, '', '', '', '', '', null, null, null);
      //GUARDA O USUARIO Q RETORNA DA API, COM ISSO QER DIZER Q CADASTROU CORRETAMENTE
      let eventoRet: Evento = responseApi.data;
      this.form.resetForm();
      this.showMessage({
        type: 'success',
        text: `Registered ${eventoRet.titulo} successfully`
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
