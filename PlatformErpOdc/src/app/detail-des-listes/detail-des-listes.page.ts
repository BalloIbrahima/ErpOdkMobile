import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DetailListPostService } from '../services/detailListe/detail-list-post.service';
import { TirageService } from '../services/tirage/tirage.service';
@Component({
  selector: 'app-detail-des-listes',
  templateUrl: './detail-des-listes.page.html',
  styleUrls: ['./detail-des-listes.page.scss'],
})
export class DetailDesListesPage implements OnInit {
 
  essai: any;
  totallist:any;
  Utilisateur:any;
  nbrliste:number=0;
  totaltirage:any;
  nbreTirageValides:number=0;
// id:number=1
  


  constructor( private service: DetailListPostService,private http: HttpClient ,private services: TirageService /*public listeService:ListeService,public tirageService:TirageService*/) { }

  ngOnInit(): void {
  

    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
      console.log(this.Utilisateur.login)

      // this.tirageService.doTirage(this.Utilisateur.login, this.Utilisateur.password,this.libelleListe,this.activiteSelect.id,this.nombre,this.libelletirage).subscribe(retour=>{
      //   console.log(retour)
      //   this.ouvrirPopup()
      // })

      //tutes les listes
      this.service.GetListeTotal(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
        this.totallist=data.data;
        console.log(data)
        this.nbrliste=data.data.length;
        
        
      });

      //tirage total

      this.services.GetTotalTirage(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
        this.totaltirage=data.data.length;
        console.log(data)
        
      });

      //tirage validé
      this.services.GetTiragevalides(this.Utilisateur.login, this.Utilisateur.password).subscribe(data=>{
        this.nbreTirageValides=data.data.length;
        console.log(data)
      });

  }
}
