import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsableserviceService {
  apiUrl='http://localhost:8080'

  constructor(private http:HttpClient) { }
  //requetes pour faire un tirage en important une liste
  addtirage(libelleliste:string,idactivite:number,iduser:number,libelleTirage:string,nbredepostulants:number,file:any): Observable<void>{
    
    let l=new FormData();
    l.append("file",file)
     return this.http.post<void>(`${this.apiUrl}/tirage/new/${libelleliste}/${idactivite}/${iduser}/${libelleTirage}/${nbredepostulants}`,l);
   }
}
