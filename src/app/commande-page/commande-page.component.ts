import { Component, OnInit } from '@angular/core';
import { Commande, ligneCommande, plat } from '../data-type';
import { HeaderComponent } from '../header/header.component';
import { CommandeService } from '../services/commande.service';
import { LigneCommandeService } from '../services/ligne-commande.service';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-commande-page',
  templateUrl: './commande-page.component.html',
  styleUrls: ['./commande-page.component.css']
})
export class CommandePageComponent implements OnInit {
  platData : undefined|plat[] 
  imgPath = "./assets/"
  PrixTotal =0
  message:undefined|string
  
  constructor(private plat:PlatService, private commande:CommandeService, private ligne:LigneCommandeService){}
  ngOnInit(): void {
    this.list()
   
  }
  removeFromPanier(id:number){
    this.plat.removeLocalPanier(id)
    this.list()
  }
  list(){
    let panierData = localStorage.getItem('panier')
    if (panierData){
      let items = JSON.parse(panierData)
      this.platData=items
      items.forEach((element:plat) => {
        if (element.quantite)
        this.PrixTotal+=element.quantite * element.prix
      });
    }
  }
  
  commander(){
    let userData = localStorage.getItem('user')
    
    if (!userData){
      this.message="vous devez connecter pour commander"
      setTimeout(() => {
        this.message=undefined
       }, 5000);
    }
    else {
       const data = {} as Commande
       data.prixTotal = this.PrixTotal
       data.dateCommande = new Date()
       let user = JSON.parse(userData)
       data.idClient={"user_id":1}
       console.warn(data)
       this.commande.addCommande(data).subscribe((result)=>{
        const ligneComm = {} as ligneCommande
        let panierData = localStorage.getItem('panier')
            if (panierData){
                   let items = JSON.parse(panierData)
                   items.forEach((element:plat) => {
                    ligneComm.commande_id=result.commande_id
                    ligneComm.plat_id=element.plat_id
                    if (element.quantite){
                      ligneComm.quantite = element.quantite
                    }
                   this.ligne.addLigneCommande(ligneComm)
                  });
                     
                  
                  }    
  
        
        
       })
      
      
      
      
      
       }
    }

  }
  export function testTotal(quantite:number, prix:number){
    return   quantite-prix
  }
