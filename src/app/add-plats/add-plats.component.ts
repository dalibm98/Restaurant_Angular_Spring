import { Component, OnInit } from '@angular/core';
import { plat } from '../data-type';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-add-plats',
  templateUrl: './add-plats.component.html',
  styleUrls: ['./add-plats.component.css']
})
export class AddPlatsComponent implements OnInit{

message:string|undefined;  

constructor(private plat:PlatService){}
ngOnInit(): void {
  
}
  submit(data:plat):void{
    
   this.plat.addPlat(data).subscribe((result)=>{
    if (result){
      this.message="plat ajouté avec succes"
    }
   })
   setTimeout(() => {
    this.message=undefined
   }, 3000);
  }

}
