import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  env=environment;

  constructor(private http:HttpClient) { }

    //::::::::::::::::::Retour de la liste des roles
    getListeRole(login:String, password:String):Observable<any>{
      const data:FormData=new FormData();
      const user=[
        {
          "login":login,
          "password":password
        }]
        
      data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
  
      return this.http.post(`${this.env.api}/admin/role/toutesroles`,data)
    }

    //::::::::::::::::::Retour de la liste des formatMail dans nouvelle personnel interne
    getListeFormatMail(login:String, password:String):Observable<any>{
      const data:FormData=new FormData();
      const user=[
        {
          "login":login,
          "password":password
        }]
        
      data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
  
      return this.http.post(`${this.env.api}/formatemail/getAll`,data)
    }
}
