import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccueilserviceService {
  env=environment;

  constructor(public http:HttpClient) { }

  
  GetActviteTotal(login:String, password:String):Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/utilisateur/totalactivite`, data);
  }

  //toutes les activites ::::::::::::

  GetToutesActivites(login:String, password:String):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/utilisateur/totalactivite`, data);
  }

  // :::::::::::::::::::::::activites en cours
  acour="http://localhost:8080/admin/activites/encour";
  GetActiviteEncour(id:number):Observable<any>{

    return this.http.get(`${this.acour}/${id}`);
  }

  // :::::::::::::::::::::::activites à venir :::::::::::::::::
  avenir="http://localhost:8080/admin/activites/avenir";
  GetActiviteAvenir(id:number):Observable<any>{

    return this.http.get(`${this.avenir}/${id}`);
  }

  //;:::::::::::::::::::TOTAL POSTULANT::::::::::::::::
  postActif ="http://localhost:8080/admin/getUsers/active";
  GetPersonnelActivTotal(login :String, password:String):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/admin/getUsers/active`, data);
  }



  //;:::::::::::::::::::TOTAL POSTULANT::::::::::::::::
  GetParticipantTotal(login :String, password:String):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    //return this.http.post(`${this.env.api}/admin/getUsers/active`, data);

    return this.http.post(`${this.env.api}/responsable/participants/All`,data);
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
