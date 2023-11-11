export interface ligneCommande {
    id: number;
    commande: Commande;
    plat: plat;
    quantite: number;
    commande_id: number; // Updated property name
    plat_id: number;
    }
    export interface plat{
     plat_id:number,
        quantite:undefined|number
    }

    export interface Commande {
  
        commande_id: number
        
      }