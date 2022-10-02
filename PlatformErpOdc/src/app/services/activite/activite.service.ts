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

  Creer(idUser:Number,idSalle:Number,idType:Number,file:any,activite:any){
    const data:FormData=new FormData();
    data.append('file',file);
    data.append('data',activite);

    console.log(activite)
    return this.http.post(`${this.env.api}/utilisateur/activite/new/${idUser}/${idSalle}/${idType}`,data);
  }

  // :::::::::::::::toute les activites ::::::::::::::::
  touteactivite:`http://localhost:8080/utilisateur/lapresence`;
  GetTtActivite(login:String,password:String):Observable<any>{

    return this.http.get(`http://localhost:8080/utilisateur/lapresence/${login}/${password}`);
  }

  //recuperer les entites pour la select liste lors de la creation d'activite
  entite="http://localhost:8080/admin/getAll/entite";
  
  GetAllEntite(login:String,password:String):Observable<any>{

    return this.http.get(`http://localhost:8080/admin/getAll/entite/${login}/${password}`);
  }
}
