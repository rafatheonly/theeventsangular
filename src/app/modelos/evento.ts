import { Usuario } from "./usuario";
import { Tipoevento } from "./tipoevento";

export class Evento {
    constructor(public id: number,
        public titulo: string,
        public data_criacao: string,
        public descricao: string,
        public local: string,
        public foto: string,
        public ativo: boolean,
        public tipoevento: Tipoevento,
        public usuario: Usuario,        
    ){

    }
}