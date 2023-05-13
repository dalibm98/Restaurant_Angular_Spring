import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Commande } from '../data-type';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-mes-commandes',
  templateUrl: './mes-commandes.component.html',
  styleUrls: ['./mes-commandes.component.css']
})
export class MesCommandesComponent implements OnInit {

  commandesData : undefined |Commande[]
  iconUpdate = faEdit
  constructor(private commande:CommandeService){}


  ngOnInit(): void {
    let user = localStorage.getItem('user')
    if (user){
      let userData = JSON.parse(user)
      let userId = userData.user_id
      this.commande.getMyCommande(userId).subscribe((result)=>{
          if (result){
            this.commandesData = result
          }
      })      
    }
  }

}
