import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  env=environment;

  constructor(public http:HttpClient) { }

  Creer(login:string,password:string,idSalle:Number,idType:Number,file:any,activite:any){
    const data:FormData=new FormData();
   
    const user=[{"login":login,"password":password}]
    data.append('file',file);
    //data.append('data',activite);
    console.log(activite)
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    data.append('data', JSON.stringify(activite).slice(1,JSON.stringify(activite).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/utilisateur/activite/new/${idSalle}/${idType}`,data);
  }


    GetActiviteStatut(login:string,password:string,idActivite:Number):Observable<any>{
      const data:FormData=new FormData();
      const user=[{"login":login,"password":password}]

      data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

      return this.http.post(`${this.env.api}/admin/statut/activite/${idActivite}`,data);

    }




  // :::::::::::::::toute les activites ::::::::::::::::
  GetTtActivite(login:String,password:String):Observable<any>{
    
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/utilisateur/allactivite`,data);
  }

  //recuperer les entites pour la select liste lors de la creation d'activite
  entite="http://localhost:8080/admin/getAll/entite";
  
  GetAllEntite(login:String,password:String):Observable<any>{

    return this.http.get(`http://localhost:8080/admin/getAll/entite/${login}/${password}`);
  }

  getactivitybyId(login:String,password:String, idactivite:number):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/utilisateur/activite/${idactivite}`,data);
  }

}
