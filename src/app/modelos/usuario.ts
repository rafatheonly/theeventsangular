export class Usuario {
    constructor(public id: number,
        public nome: string,
        public rg: string,
        public email: string,
        public senha: string,
        public foto: string,
        public perfil: string,
        public ativo: boolean) {
    }
}