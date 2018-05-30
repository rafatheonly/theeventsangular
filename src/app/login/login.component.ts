import { Component, OnInit } from '@angular/core';
//IMPORTACAO DE OUTRO METODO DE FAZER VALIDACOES EM FORMS
//import { Usuario } from '../services/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //ATRIBUTOS DA OUTRA FORMA DE FAZER VALIDACOES EM FORMS
  //public form = new Usuario(1, 'Rafael Calearo', 'rafaelcalearo@hotmail.com');
  //userForm: FormGroup;

  //ATRIBUTO DO TIPO FORMULARIO (FormGroup)
  formulariologar: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    //CHAMADA DE METODO P/ VALIDAR O FORMULARIO (N PRECISOU SER ASSIM)
    //this.validaFormularioLogin();
    //METODO DA OUTRA FORMA DE VALIDAR O FORMULARIO
    //this.userForm = new FormGroup({
    // 'nome': new FormControl(this.form.nome, [Validators.required]),
    // 'email': new FormControl(this.form.email, [Validators.required, Validators.email])
    //});
    //FORMA DIRETA
    this.formulariologar = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required]
    });
  }

  //NAO PRECISA DO METODO, PODE SER DIRERO NO NGONINIT
  //validaFormularioLogin() {
  //  this.formulariologar = this.formBuilder.group({
  //    email: [null, [Validators.required, Validators.email]],
  //    senha: [null, Validators.required]
  //});
  //}

  //logar() { }

  //cadastrar() { }
}
