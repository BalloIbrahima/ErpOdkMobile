import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeActiviteService {

  env=environment;

  constructor(private http:HttpClient) { }


  //::::::::::::::::::Retour de la liste des types activités
  getListe():Observable<any>{
    return this.http.get(`${this.env.api}/admin/Typeactivite/getall`)
  }
}
