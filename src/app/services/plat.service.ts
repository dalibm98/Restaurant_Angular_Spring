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
    data.ImageUrl= data.ImageUrl.replace('C:\\fakepath\\','')
    return this.http.post('https://localhost:7200/api/Plats',data)
  }

  
  platsList(){
    return this.http.get<plat[]>('https://localhost:7200/api/Plats')
  }

  deletePlat(id:number){
    return this.http.delete(`https://localhost:7200/api/Plats/${id}`)
  }

  getPlat(id:string){
    return this.http.get<plat>(`https://localhost:7200/api/Plats/${id}`)
  }

  updatePlat(plat:plat){
   return this.http.put<plat>(`https://localhost:7200/api/Plats/${plat.id}`,plat)
  }

  popularPlats(){
   return this.http.get<plat[]>("https://localhost:7200/api/Plats")
  }
  trendyPlats(){
    return this.http.get<plat[]>("https://localhost:7200/api/Plats")
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
      items = items.filter((item:plat)=>id!==item.id)
      localStorage.setItem('panier',JSON.stringify(items)) 
      this.panierData.emit(items)

      
    }
  }

}
