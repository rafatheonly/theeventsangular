import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../servicos/shared.service';
import { DialogService } from '../../dialog.service';
import { Router } from '@angular/router';
import { EventoService } from '../../servicos/evento/evento.service';
import { ResponseApi } from '../../modelos/response-api';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  page: number = 0;
  count: number = 5;
  pages: Array<number>;
  shared: SharedService;
  message: {};
  classCss: {};
  listEvents = [];
  totalRegistros: number = 0;

  constructor(
    private dialogService: DialogService,
    private eventoService: EventoService,
    private router: Router) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.findAll(this.page, this.count);
  }

  findAll(page: number, count: number) {
    this.eventoService.findAllPage(page, count).subscribe((responseApi: ResponseApi) => {
      this.listEvents = responseApi['data']['content'];
      this.pages = new Array(responseApi['data']['totalPages']);
      this.totalRegistros = responseApi['data']['totalElements'];
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });

  }

  edit(id: number) {
    this.router.navigate(['/evento', id]);
  }

  detalhes(id: number) {
    this.router.navigate(['/detalhes', id]);
  }

  /**delete(id: string) {
    this.dialogService.confirm('Do you want to delete the email ?')
      .then((candelete: boolean) => {
        if (candelete) {
          this.message = {};
          this.userService.delete(id).subscribe((responseApi: ResponseApi) => {
            this.showMessage({
              type: 'success',
              text: `Record deleted`
            });
            this.findAll(this.page, this.count);
          }, err => {
            this.showMessage({
              type: 'error',
              text: err['error']['errors'][0]
            });
          });
        }
      });
  }**/

  setNextPage(event: any) {
    event.preventDefault();
    if (this.page + 1 < this.pages.length) {
      this.page = this.page + 1;
      this.findAll(this.page, this.count);
    }
  }

  setPreviousPage(event: any) {
    event.preventDefault();
    if (this.page > 0) {
      this.page = this.page - 1;
      this.findAll(this.page, this.count);
    }
  }

  setPage(i, event: any) {
    event.preventDefault();
    this.page = i;
    this.findAll(this.page, this.count);
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
