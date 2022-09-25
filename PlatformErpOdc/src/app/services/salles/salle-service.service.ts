import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleServiceService {

  constructor(private http:HttpClient) { }

// :::::::::Recupere salle par id

getSalleParId(id:Number):Observable<any>{
  return this.http.get(`http://localhost:8080/admin/getSalle/${id}`)
}

  
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
  return this.http.post(`http://localhost:8080/admin/creersalle/${id}`,salle);
}



  
//::::::::::Modif de salle :::::::::::::::::::::::

ModifSalle(id:number,libelle:String,description:string,
  etage: string,
  nombre: number, disponibilite:any): Observable<any>{
  
    var salle={
      "id":id,
      "libelle":libelle,
      'description':description,
      "etage":etage,
      "nombreplace":nombre,
      "disponibilite":disponibilite
    }
    return this.http.put(`http://localhost:8080/admin/modifiersalle/4`,salle);
  }

  ////

  recupererSalles():Observable<any>{
    return this.http.get(`http://localhost:8080/admin/salle/all`)
  }
}

