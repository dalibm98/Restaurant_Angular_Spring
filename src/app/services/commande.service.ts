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
    return this.http.post<Commande>('http://localhost:8080/commandes/add',data)
  }
  getLastCommandeInsertedId(){
    return this.http.get('http://localhost:8080/commandes/LastId')
  }
  getMyCommande(userId:number){
    return this.http.get<Commande[]>(`http://localhost:8080/commandes/mesCommandes/${userId}`)
  }
}
