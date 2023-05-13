import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient, private router:Router) { }

  userLogin(data:login){
    this.http.get(`http://localhost:8080/login?username=${data.username}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
     console.warn(result)
      if (result && result.body && Object.keys(result.body).length===5){
             localStorage.setItem('user',JSON.stringify(result.body))
            this.router.navigate(['/'])
  }
  else {
    console.warn('login failed')
  } 
  
    })
  }

  userSignUp(data:signUp){
    data.role=0
    return this.http.post('http://localhost:8080/register',data,{observe:'response'}).subscribe((result)=>{
          if (result){
            localStorage.setItem('user',JSON.stringify(result.body))
            this.router.navigate(['/'])
          }
    })
  }

  reloadUser(){
    if (localStorage.getItem('user')){
      this.isUserLoggedIn.next(true)
      this.router.navigate(['homeUser'])

    }
  }

  getAllUsers(){
    return this.http.get<signUp[]>('http://localhost:8080/users/all');
  }
  deleteUser(id:number){
    return this.http.delete(`http://localhost:8080/users/delete/${id}`)
  }

  getUser(id:string){
    return this.http.get<signUp>(`http://localhost:8080/users/${id}`)
  }
  updateUser(user:signUp){
    return this.http.put<signUp>(`http://localhost:8080/users/update/${user.user_id}`,user)
  }

  GetAll(){
    return this.http.get('https://localhost:7200/api/Utilisateur');
  }
}
