import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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
}