import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient, private router:Router) { }

  addCommande(data:Commande){
    return this.http.post<Commande>('https://localhost:7200/api/Commandes',data)
  }
  getLastCommandeInsertedId(){
    return this.http.get('https://localhost:7200/api/Commandes/LastId')
  }
  getMyCommande(userId:number){
    return this.http.get<Commande[]>(`https://localhost:7200/api/Commandes/mesCommandes?userID=${userId}`)
  }
}
