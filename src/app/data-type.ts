export interface signUp{
    username:string,
    password:string,
    role:number,
    id : number
}

export interface login{
    username:string,
    password:string,
}

export interface plat{
    nom : string,
    prix : number,
    ImageUrl :string,
    imageUrl:string,
    id:number,
    quantite:undefined|number
}

export interface Commande{
    dateCommande:Date,
    idClient:number,
    prixTotal:number,
    id:number
}

export interface ligneCommande{
    idCommande: number,
    idPlat: number,
    quantite: number
}