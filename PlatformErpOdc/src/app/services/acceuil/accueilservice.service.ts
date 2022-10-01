import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Login } from '@ionic/cli';
@Injectable({
  providedIn: 'root'
})
export class AccueilserviceService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8080/utilisateur/totalactivite";

  GetActviteTotal(login :String, password:String):Observable<any>{

    return this.http.get(`${this.url}/${login}/${password}`);
  }

  //toutes les activites ::::::::::::

  
  urlTOUT="http://localhost:8080/utilisateur/ToutActivite";

  GetToutesActivites(login :String, password:String):Observable<any>{

    return this.http.get(`${this.urlTOUT}/${login}/${password}`);
  }

  // :::::::::::::::::::::::activites en cours
  acour="http://localhost:8080/admin/activites/encour";
  GetActiviteEncour(login :String, password:String):Observable<any>{

    return this.http.get(`${this.acour}/${login}/${password}`);
  }

  // :::::::::::::::::::::::activites à venir :::::::::::::::::
  avenir="http://localhost:8080/admin/activites/avenir";
  GetActiviteAvenir(login :String, password:String):Observable<any>{

    return this.http.get(`${this.avenir}/${login}/${password}`);
  }

  //;:::::::::::::::::::TOTAL POSTULANT::::::::::::::::
  postActif ="http://localhost:8080/admin/getUsers/active";
  GetPersonnelActivTotal(login :String, password:String):Observable<any>{

    return this.http.get(`${this.postActif}/${login}/${password}`);
  }


  //;:::::::::::::::::::TOTAL ENTITE::::::::::::::::
  GetEntiteTotal():Observable<any>{

    return this.http.get("http://localhost:8080/admin/totalentite");
  }


  //:::::::::::::::Ajout Salle ::::::::::::::::::::
  url1="http://localhost:8080/admin/creersalle";

  AddSalle(id: number){
    return this.http.get(`${this.url1}/${id}`)
  }
}
