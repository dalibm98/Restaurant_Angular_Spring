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

export interface Commande {
    dateCommande: Date,
    user: User;
    prixTotal: number,
    commande_id: number
    
  }
export interface User {

    user_id :number
}

  
export interface ligneCommande {
    id: number;
    commande: Commande;
    plat: plat;
    quantite: number;
    commande_id: number; // Updated property name
    plat_id: number;
    }