import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventoService {

  eventosUrl = 'http://localhost:8080/eventos';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.eventosUrl);
  }
}
