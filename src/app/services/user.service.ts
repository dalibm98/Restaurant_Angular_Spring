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
    this.http.get(`https://localhost:7200/api/Utilisateurs/GetUtilisateurLogin?username=${data.username}&password=${data.password}`,
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
    return this.http.post('https://localhost:7200/api/Utilisateurs',data,{observe:'response'}).subscribe((result)=>{
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
    return this.http.get<signUp[]>('https://localhost:7200/api/Utilisateurs');
  }
  deleteUser(id:number){
    return this.http.delete(`https://localhost:7200/api/Utilisateurs/${id}`)
  }

  getUser(id:string){
    return this.http.get<signUp>(`https://localhost:7200/api/Utilisateurs/GetUtilisateur/${id}`)
  }
  updateUser(user:signUp){
    return this.http.put<signUp>(`https://localhost:7200/api/Utilisateurs/${user.id}`,user)
  }

  GetAll(){
    return this.http.get('https://localhost:7200/api/Utilisateur');
  }
}
