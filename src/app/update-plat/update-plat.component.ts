import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { plat } from '../data-type';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.component.html',
  styleUrls: ['./update-plat.component.css']
})
export class UpdatePlatComponent implements OnInit {
platData: undefined |plat  
message: undefined|string
id:any
constructor(private route:ActivatedRoute, private plat:PlatService){}  
ngOnInit(): void {
  let Plat_id= this.route.snapshot.paramMap.get('id')
  Plat_id && this.plat.getPlat(Plat_id).subscribe((data)=>{
    this.platData=data
  })
}


submit(data:plat){
  if (this.platData){
    data.id = this.platData.id
    data.imageUrl=this.platData.imageUrl
  }
  this.plat.updatePlat(data).subscribe(()=>{
      
        this.message="plat modifié avec succés"
    
      setTimeout(()=>{
        this.message=undefined
      },3000)
  })
  
 
}
}
