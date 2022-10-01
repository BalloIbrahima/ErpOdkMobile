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

  //methode qui retourne l'ensemble des utilisateurs
  getAllUsers(){

  }

  //l'esamble des users active
  getActivesUsers():Observable<any>{
    return this.http.get(`${this.env.api}/admin/getUsers/active`)
  }

  //l'esamble des users desactive
  getDesactivesUsers():Observable<any>{
    return this.http.get(`${this.env.api}/admin/getUsers/desactive`)
  }
}
