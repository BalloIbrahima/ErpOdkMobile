import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalleServiceService {
  env=environment;

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

  //recuperer salles disponibles
  getAllDispo():Observable<any>{
    return this.http.get(`http://localhost:8080/admin//getSalles/disponible`)

  }
  //:::::::::ajout entite ::::::::::::::::

  ajoutEntite(description:String,libelleentite:String): Observable<any>{

    var entite={
      "description":description,
      'libelleentite':libelleentite,
     
    }
      return this.http.post(`http://localhost:8080/admin/create/entite`,entite);
  }


  getSalleDisponible(login:String,password:String): Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/admin/SalleDisponible`, data);
    //return this.http.get(`http://localhost:8080/admin/SalleDisponible/${login}/${password}`);
  }

  getSallesIndispo(login:String, password:String):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/admin/SalleInDisponiblee`, data);
  }
}

