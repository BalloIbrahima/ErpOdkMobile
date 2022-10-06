<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
>>>>>>> ebcfac6c6427faa685b2ecdf79338090c7e32533

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  env=environment;
  

  constructor(public http:HttpClient) { }
  public importerListePostulant(libelle : String, file:any, login : String, password : String) {
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    data.append('file',file);

    return this.http.post(`${this.env.api}/responsable/listpostulant/new/${libelle}`,data);
  }


  // :::::::::::::::toute les listes::::::::::::::::
  GetAllListe(login:String,password:String):Observable<any>{
    
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/utilisateur/AllListePost`,data);
  }
  
}
