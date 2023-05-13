import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ligneCommande } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {

  constructor(private http:HttpClient, private router:Router) { }

  addLigneCommande(data:ligneCommande){
    this.http.post('http://localhost:8080/ligneCommandes',data).subscribe((result)=>{
      if (result){
        localStorage.removeItem('panier')
        this.router.navigate(['/success'])
      }

    })
  }

  getLignesCommandes(commandeId:number){
    return this.http.get<ligneCommande[]>(`https://localhost:7200/api/ligneCommandes/mesLignesCommandes?commandeId=${commandeId}`)
  }
}
