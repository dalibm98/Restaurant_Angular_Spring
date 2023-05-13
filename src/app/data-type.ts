export interface signUp{
    username:string,
    password:string,
    role:number,
    user_id : number
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
    plat_id:number,
    quantite:undefined|number
}

export interface Commande{
    dateCommande:Date,
    idClient:object,
    prixTotal:number,
    commande_id:number
}

export interface ligneCommande{
    commande_id: number,
    plat_id: number,
    quantite: number
}