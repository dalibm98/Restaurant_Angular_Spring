import { Component, OnInit } from '@angular/core';
import { plat } from '../data-type';
import { PlatService } from '../services/plat.service';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {

  constructor(private plat:PlatService){}

  platList: undefined|plat[]
  imgPath = "./assets/"
  message:string|undefined
  iconDelete = faTrash
  iconUpdate = faEdit

  ngOnInit(): void {
   this.list()
  }

  deletePlat(id:number){
    this.plat.deletePlat(id).subscribe(()=>{
      this.message="plat supprimé avec succes"
      this.list()
     })
     setTimeout(() => {
      this.message=undefined
     }, 3000);
  }

  list(){
    this.plat.platsList().subscribe((result)=>{
      
      if (result){
        
        this.platList=result
      } 
    })
  }

}
