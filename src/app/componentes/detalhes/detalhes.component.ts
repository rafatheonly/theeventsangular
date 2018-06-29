import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from '../../servicos/evento/evento.service';
import { ResponseApi } from '../../modelos/response-api';
import { Evento } from '../../modelos/evento';
import { Tipoevento } from '../../modelos/tipoevento';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  evento = new Evento(null, '', '', '', '', '', null, null, null);
  tipoevento = new Tipoevento(null, '', null);
  message: {};
  classCss: {};

  constructor(
    private eventoService: EventoService,
    private route: ActivatedRoute,
    private router: Router) { }

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
      //this.tipoevento = responseApi.data;
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  convidado(id: number) {
    this.router.navigate(['/convidado', id]);
  }

  convidados(id: number) {
    this.router.navigate(['/convidados', id]);
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
