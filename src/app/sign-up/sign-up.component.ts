import { Component,OnInit } from '@angular/core';
import { signUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private user:UserService){}

  ngOnInit(): void {
    this.user.reloadUser()
  
  }

  signUp(data:signUp):void{
    this.user.userSignUp(data)
}
}
