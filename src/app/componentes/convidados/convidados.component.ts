import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConvidadoService } from '../../servicos/convidado/convidado.service';
import { ResponseApi } from '../../modelos/response-api';
import { SharedService } from '../../servicos/shared.service';

@Component({
  selector: 'app-convidados',
  templateUrl: './convidados.component.html',
  styleUrls: ['./convidados.component.css']
})
export class ConvidadosComponent implements OnInit {

  page: number = 0;
  count: number = 5;
  pages: Array<number>;
  shared: SharedService;
  message: {};
  classCss: {};
  convidados = [];  
  totalRegistros: number = 0;

  constructor(
    private convidadoService: ConvidadoService,
    private route: ActivatedRoute
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
    this.convidadoService.findAllPage(this.page,this.count,id).subscribe((responseApi: ResponseApi) => {
      this.convidados = responseApi['data']['content'];
      this.pages = new Array(responseApi['data']['totalPages']);
      this.totalRegistros = responseApi['data']['totalElements'];     
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
