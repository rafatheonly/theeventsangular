import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventoService {

  //eventosUrl = 'http://localhost:8080/eventos';
  eventosUrl = 'https://postgres://nhcafttttpbeku:8de8224ae193af258288f3e5589f8fd84ba03f275b7b01741bc96981839ec7c2@ec2-54-204-39-46.compute-1.amazonaws.com:5432/ddu2o8v202apch';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.eventosUrl);
  }
}
