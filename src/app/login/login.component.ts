import { Component, OnInit } from '@angular/core';
import { Usuario } from '../services/usuario';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = new Usuario(1, 'Rafael Calearo', 'rafaelcalearo@hotmail.com');
  public userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      'nome': new FormControl(this.form.nome, [Validators.required]),
      'email': new FormControl(this.form.email, [Validators.required, Validators.email])
    });
  }

  logar() { }

  cadastrar() { }
}
