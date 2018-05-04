import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento/evento.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  eventos = [];

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.eventoService.listar().subscribe(dados => this.eventos = dados);
  }
}
