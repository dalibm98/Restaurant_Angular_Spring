import { Component,OnInit } from '@angular/core';
import { login, signUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
constructor(private user:UserService){}
message:undefined|string
ngOnInit(): void {this.user.reloadUser()}

login(data:login){
    
    this.user.userLogin(data)
}
}
