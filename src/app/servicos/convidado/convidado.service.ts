import { Convidado } from './../../modelos/convidado';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THE_EVENTS_API } from '../theevents.api';

@Injectable()
export class ConvidadoService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<any[]>(`${THE_EVENTS_API}/convidados`);
  }

  findById(id: number) {
    return this.http.get(`${THE_EVENTS_API}/convidados/${id}`);
  }

  findAllPage(page:number,count:number,id:number){
    return this.http.get(`${THE_EVENTS_API}/convidados/${page}/${count}/${id}`);
  }

  createOrUpdate(convidado: Convidado) {
    if (convidado.id != null) {
      return this.http.put(`${THE_EVENTS_API}/convidados`, convidado);
    } else {
      convidado.id = null;
      return this.http.post(`${THE_EVENTS_API}/convidados`, convidado);
    }
  }

  /**findAllPage(page: number, count: number) {
    return this.http.get(`${THE_EVENTS_API}/convidados/${page}/${count}`);
  }**/

}
