import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Usuario } from "../../modelos/usuario";
import { THE_EVENTS_API } from "../../servicos/theevents.api"

@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient) { }

    login(usuario: Usuario) {
        return this.http.post(`${THE_EVENTS_API}/auth`, usuario);
    }

    createOrUpdate(usuario: Usuario) {
        if (usuario.id != null) {
            return this.http.put(`${THE_EVENTS_API}/usuarios`, usuario);
        } else {
            usuario.id = null;
            return this.http.post(`${THE_EVENTS_API}/usuarios`, usuario);
        }
    }

    findAll(page: number, count: number) {
        return this.http.get(`${THE_EVENTS_API}/usuarios/${page}/${count}`);
    }

    findById(id: number) {
        return this.http.get(`${THE_EVENTS_API}/usuarios/${id}`);
    }
}