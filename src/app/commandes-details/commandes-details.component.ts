import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ligneCommande, plat } from '../data-type';
import { LigneCommandeService } from '../services/ligne-commande.service';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-commandes-details',
  templateUrl: './commandes-details.component.html',
  styleUrls: ['./commandes-details.component.css']
})
export class CommandesDetailsComponent implements OnInit {

  ligneCommandes : undefined |ligneCommande[]
  platData: undefined | plat
  plats : undefined | plat[]
  imgPath="./assets/"
  constructor (private activeRoute:ActivatedRoute, private ligneCommande:LigneCommandeService, private plat:PlatService){}

  ngOnInit(): void {
    let commandeId = this.activeRoute.snapshot.paramMap.get('id')
    this.plats = []
    commandeId && this.ligneCommande.getLignesCommandes(parseInt(commandeId) ).subscribe((data)=>{
      this.ligneCommandes = data
      this.ligneCommandes.forEach((element)=>{
        this.plat.getPlat(element.plat_id.toString()).subscribe((result)=>{
          result.quantite=element.quantite
          this.plats?.push(result)
          console.warn(this.plats)
          
          
          
        })
        

          
      })
      
    })
    
  }

}
