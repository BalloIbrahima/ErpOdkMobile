import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TirageService {
  env=environment;
  constructor(private http:HttpClient) { }
  
  // :::::::::::::::Faire tirage ::::::::::::::::::::::::::::::::::::::::::::::::::
  doTirage(login:String,password:String,libelleliste:number,idactivite:number,nombre:number,libelleTirage:String):Observable<any>{
    
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/responsable/tirage/new/${libelleliste}/${idactivite}/${nombre}/${libelleTirage}`,data);
  }

//:::::::::::::::::::Recuperer tirage par id:::::::::::::::::::::::::::::::::::
getTirageById(login:String,password:String,id:number):Observable<any>{
    
  const data:FormData=new FormData();
  const user=[{"login":login,"password":password}]
  data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
  return this.http.post(`${this.env.api}
  ​/utilisateur​/tirageById​/${id}`,data);
}
}