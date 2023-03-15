import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { signUp } from '../data-type';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private user:UserService){}
  users: undefined |signUp[]
  iconDelete = faTrash
  iconUpdate = faEdit
  message:undefined |string
 
  ngOnInit(): void {
 
   this.listUsers()
  }
  listUsers(){
    this.user.getAllUsers().subscribe((data)=>{
      this.users = data
   })
  }
  deleteUser(id:number){    
    this.user.deleteUser(id).subscribe((result)=>{
          this.message="utilisateur supprimé avec success"
          this.listUsers()  
    })
    setTimeout(()=>{
      this.message = undefined
    },5000)
  }

  
}
