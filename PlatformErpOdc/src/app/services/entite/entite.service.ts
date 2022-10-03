import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntiteService {

  constructor(private http:HttpClient) { }
  //recuperer les entites pour la select liste lors de la creation d'activite
 env=environment
  entite="http://localhost:8080/admin/getAll/entite";
  
  // GetAllEntite(login:String,password:String):Observable<any>{

  //   return this.http.get(`http://localhost:8080/admin/getAll/entite/${login}/${password}`);
  // }
  PostEntite(login :String, password:String, file:File, libelleentite :String, description: String, responsable: String):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    const entite=[{"libelleentite":libelleentite,"description":description, "utilisateur":responsable}]

    data.append('file',file)
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    data.append('entite', JSON.stringify(entite).slice(1,JSON.stringify(entite).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/admin/create/entite`, data);
  }
}
