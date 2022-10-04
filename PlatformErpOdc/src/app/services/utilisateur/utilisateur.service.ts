import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  env=environment;

  constructor(public http:HttpClient) { }

  //methode pour le login
  login(login:String,password:String):Observable<any>{

    console.log(login)
    console.log(password)
    var utilisateur={
      "login":login,
      "password":password
    }
    return this.http.post(`${this.env.api}/utilisateur/login`,utilisateur);
  }

  //methode pour la creation d'un utilisateur
  CreateUser(User:any,login:String,password:String){
    return this.http.post(`${this.env.api}/create/user/${login}/${password}`,User)
  }

  //methode qui retourne l'ensemble des utilisateurs
  getAllUsers(login :String, password:String):Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/admin/getUsers/all`, data);  
  
  }

  //l'esamble des users active
  getActivesUsers(login :String, password:String):Observable<any>{
   
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/admin/getUsers/active`, data);  
  }

  //l'esamble des users desactive
  getDesactivesUsers():Observable<any>{
    return this.http.get(`${this.env.api}/admin/getUsers/desactive`)
  }
}
