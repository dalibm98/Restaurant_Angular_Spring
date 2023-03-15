import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
constructor(private route:Router,private plat:PlatService){}
  menuType:string='default';
  username:string='';
  panierItems=0
  ngOnInit(): void {
    
    this.route.events.subscribe((val:any)=>{
        if (val.url){
          if (localStorage.getItem('user')){
            let userStore = localStorage.getItem('user');
            let userData = userStore && JSON.parse(userStore);
            if (userData.role==1){
              this.username="admin"
              this.menuType='admin'
            }
            else{
              this.username=userData.username;
              this.menuType='user';
            }
            
          }
          else{
            this.menuType='default'
          }
        }
    })
    let panierData = localStorage.getItem('panier')
    if (panierData){
      this.panierItems=JSON.parse(panierData).length
    }
    this.plat.panierData.subscribe((items)=>{
      this.panierItems=items.length
    })
  }

  logout(){
    localStorage.removeItem('user');
    window.location.reload()
  }
  
}
