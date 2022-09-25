import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleServiceService {

  constructor(private http:HttpClient) { }



  
//::::::::::ajout de salle :::::::::::::::::::::::

ajoutSalle(id:number,libelle:String,description:string,
etage: string,
nombre: number): Observable<any>{

  var salle={
    "libelle":libelle,
    'description':description,
    "etage":etage,
    "nombreplace":nombre,
    "disponibilite":true
  }
  return this.http.post(`http://localhost:8080/admin/creersalle/1`,salle);
}

}

