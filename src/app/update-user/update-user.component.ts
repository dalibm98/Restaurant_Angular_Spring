import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { signUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userData : undefined | signUp
  message : undefined | string
  constructor(private route:ActivatedRoute,private user:UserService){}
  ngOnInit(): void {
    let userId = this.route.snapshot.paramMap.get('id')
    userId && this.user.getUser(userId).subscribe((data)=>{
      this.userData = data
      
    }) 
  }
  submit(data:signUp){
   
    if (this.userData){
      data.user_id=this.userData.user_id
      data.password= this.userData.password
      if (!data.role){
        data.role = this.userData.role
      }
    }
    console.warn(data);
    
   
    
    this.user.updateUser(data).subscribe(()=>{
      this.message='utilisateur modifié avec succés !'
      setTimeout(()=>{
        this.message=undefined
      },3000)
    }) 
   
    
  }
}
