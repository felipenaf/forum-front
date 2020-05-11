export interface DominioBack {
    Id: number,
    SubDominio: string,
    Nome: string,
    LinkLogotipo: string
}

export interface DominioFront {
    id: number,
    subDominio: string,
    nome: string,
    linkLogotipo: string
}

export class UsuarioModel {

    public obterDominio(dominios: DominioBack[]): DominioFront {
        return {
            'id': dominios[0].Id,
            'nome': dominios[0].Nome,
            'linkLogotipo': dominios[0].LinkLogotipo,
            'subDominio': dominios[0].SubDominio
        }
    }
}
