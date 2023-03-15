import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plat } from '../data-type';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-plat-details',
  templateUrl: './plat-details.component.html',
  styleUrls: ['./plat-details.component.css']
})
export class PlatDetailsComponent implements OnInit {
 platData : undefined|plat 
 imgPath = "./assets/"
 productQuantity:number=1;
 removePanier = false
constructor(private activeRoute:ActivatedRoute,private plat:PlatService){}

  ngOnInit(): void {
    let plat_id = this.activeRoute.snapshot.paramMap.get('id')
    plat_id && this.plat.getPlat(plat_id).subscribe((data)=>{
      this.platData=data
      let panierData = localStorage.getItem('panier')
      if (plat_id &&  panierData){
        let items = JSON.parse(panierData)
        items = items.filter((item:plat)=>plat_id===item.id.toString())
        if (items.length){
          this.removePanier=true
        }
        else{
          this.removePanier=false
        }
        
      }
    })
  }
  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+=1;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1;
    }
  }
  
  addToPanier(){
    
    
    if (this.platData){
      this.platData.quantite=this.productQuantity
        this.plat.addLocalPanier(this.platData)
        this.removePanier=true
      
      
    }
  }

  removeFromPanier(id:number){
    this.plat.removeLocalPanier(id)
    this.removePanier= false
  }

}
/* loop through json object 
 items.forEach((element:plat) => {
          console.warn(element.id);
          
        });
*/