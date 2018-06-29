import { EventoService } from './../../servicos/evento/evento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  eventos = [];

  constructor(private eventoService: EventoService,
    private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.eventoService.findAll().subscribe(dados => this.eventos = dados);
  }

  detalhes(id: number) {
    this.router.navigate(['/detalhes', id]);
  }
}
