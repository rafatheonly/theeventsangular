import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THE_EVENTS_API } from '../theevents.api';
import { Evento } from '../../modelos/evento';

@Injectable()
export class EventoService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<any[]>(`${THE_EVENTS_API}/eventos`);
  }

  findById(id: number) {
    return this.http.get(`${THE_EVENTS_API}/eventos/${id}`);
  }

  createOrUpdate(evento: Evento) {
    if (evento.id != null) {
      return this.http.put(`${THE_EVENTS_API}/eventos`, evento);
    } else {
      evento.id = null;
      return this.http.post(`${THE_EVENTS_API}/eventos`, evento);
    }
  }

  findAllPage(page: number, count: number) {
    return this.http.get(`${THE_EVENTS_API}/eventos/${page}/${count}`);
}
}
