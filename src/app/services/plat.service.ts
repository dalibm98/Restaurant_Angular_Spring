import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ligneCommande, plat } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  panierData = new EventEmitter<plat[]|[]>()
  constructor(private http:HttpClient, private router:Router) { }
   
  addPlat(data:plat){
    data.imageUrl= data.imageUrl.replace('C:\\fakepath\\','')
    return this.http.post('http://localhost:8080/plats',data)
  }

  
  platsList(){
    return this.http.get<plat[]>('http://localhost:8080/plats/all')
  }

  deletePlat(id:number){
    return this.http.delete(`http://localhost:8080/plats/delete/${id}`)
  }

  getPlat(id:string){
    return this.http.get<plat>(`http://localhost:8080/plats/${id}`)
  }

  updatePlat(plat:plat){
   return this.http.put<plat>(`http://localhost:8080/plats/update/${plat.plat_id}`,plat)
  }

  popularPlats(){
   return this.http.get<plat[]>("http://localhost:8080/plats/all")
  }
  trendyPlats(){
    return this.http.get<plat[]>("http://localhost:8080/plats/all")
  }
  addLocalPanier(data:plat){
    let panierData=[]
    let panier = localStorage.getItem('panier')
    if (!panier){
      localStorage.setItem('panier',JSON.stringify([data]))
    }
    else{
      
      panierData = JSON.parse(panier)
      panierData.push(data)
      localStorage.setItem('panier',JSON.stringify(panierData)) 
      this.panierData.emit(panierData)
    }
  }
  removeLocalPanier(id:number){
    let panierData = localStorage.getItem('panier')
    if (panierData){
      let items:plat[] = JSON.parse(panierData)
      items = items.filter((item:plat)=>id!==item.plat_id)
      localStorage.setItem('panier',JSON.stringify(items)) 
      this.panierData.emit(items)

      
    }
  }

}
