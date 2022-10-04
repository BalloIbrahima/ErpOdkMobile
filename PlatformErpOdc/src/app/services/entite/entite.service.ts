import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntiteService {

  env=environment;

  constructor(public http:HttpClient) { }

  getAllEntites(login:String, password:String):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/admin/getAll/entite`, data);
  }

  PostEntite(login :String, password:String, file:File, libelleentite :String, description: String, utilisateur: any, gerant: any):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    const entite=[{"libelleentite":libelleentite,"description":description, "createur":utilisateur, "gerant":gerant}]

    data.append('file',file)
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    data.append('entite', JSON.stringify(entite).slice(1,JSON.stringify(entite).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/admin/create/entite`, data);
  }
}