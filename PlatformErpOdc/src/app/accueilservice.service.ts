import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccueilserviceService {

  constructor(private http:HttpClient) { }


  GetActviteTotal():Observable<any>{

    return this.http.get("http://localhost:8080/utilisateur/totalactivite");
  }

  //;:::::::::::::::::::TOTAL POSTULANT::::::::::::::::
  GetPersonnelTotal():Observable<any>{

    return this.http.get("http://localhost:8080/admin/totalpersonnel");
  }


  //;:::::::::::::::::::TOTAL ENTITE::::::::::::::::
  GetEntiteTotal():Observable<any>{

    return this.http.get("http://localhost:8080/admin/totalentite");
  }
}
