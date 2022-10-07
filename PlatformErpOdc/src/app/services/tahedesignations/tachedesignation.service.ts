import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TachedesignationService {
  env = environment;

  constructor(private http:HttpClient) { }

//;;;;;;;;;;;;;;;;;;;;;;creer designation::::::::::::::::::::

  creerDesignation(login: String, password: String ,nom:string, etat: boolean): Observable<any> {

    const data: FormData = new FormData();
    const user = [{ "login": login, "password": password }]
    const designation=[{ "libelle": nom, "etat": etat }]
    data.append('user', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));
    data.append('designation', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/designation/designation`, data)

}
 
getEtat(){
  
}



}
