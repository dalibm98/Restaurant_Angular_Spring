import { Component, OnInit } from '@angular/core';
import { plat } from '../data-type';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  popularPlats : undefined|plat[]
  trendyPlats: undefined|plat[]
  imgPath = "./assets/"
  constructor(private plat:PlatService){}

  ngOnInit(): void {
    this.plat.popularPlats().subscribe((data)=>{
      
      this.popularPlats=data
    })
    this.plat.trendyPlats().subscribe((data)=>{
      this.trendyPlats=data
    })
  }
  addToPanier(){
    
  }

}
