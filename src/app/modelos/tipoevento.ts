import { Usuario } from "./usuario";

export class Tipoevento {
    constructor(public id: number,
        public descricao_tipo_evento: string,
        public usuario: Usuario) {
    }
}