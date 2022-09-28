import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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

}
