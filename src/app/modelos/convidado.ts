import { Usuario } from './usuario';
import { Evento } from './evento';
export class Convidado {
    constructor(public id: number,
        public nome: string,
        public rg: string,
        public evento: Evento,
        public usuario: Usuario) {
    }
}