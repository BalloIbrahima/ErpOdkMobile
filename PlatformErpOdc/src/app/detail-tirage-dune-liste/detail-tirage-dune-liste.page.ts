import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailListPostService } from '../services/detailListe/detail-list-post.service';
import { ListeService } from '../services/listes/liste.service';
import { TirageService } from '../services/tirage/tirage.service';

@Component({
  selector: 'app-detail-tirage-dune-liste',
  templateUrl: './detail-tirage-dune-liste.page.html',
  styleUrls: ['./detail-tirage-dune-liste.page.scss'],
})
export class DetailTirageDuneListePage implements OnInit {

  p: number=1;
  searchText:any;
  toustirages:any
  Utilisateur:any;
  id:any;
  listparid:any;
  nbrPost:number=0;
  detList:any;
  dateImpList:any


  constructor(private route:ActivatedRoute, private service: DetailListPostService, private services: ListeService/*public service: TirageService*/) { }

  ngOnInit() {
    
  this.id = this.route.snapshot.params['id']
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
      console.log(this.Utilisateur.login)

      //liste de tous les tirages d'une liste et infos sur la liste données
    this.services.GetListeParId(this.Utilisateur.login,this.Utilisateur.password,this.id).subscribe(data=>{
     //infos sur la liste données: libelle, date, nombre postulant
      this.detList= data.data.libelle;
      console.log(this.detList)
      this.dateImpList= data.data.dateimport;
      console.log(this.dateImpList)
      this.nbrPost= data.data.postulants.length;
      console.log(this.nbrPost);
     
      //liste de tous les tirages d'une liste
      this.listparid=data.data.tirages;
      console.log(this.listparid)
      // this.listparid=data.data.tirages;
      // console.log(this.listparid.id);
      // console.log(this.listparid.tirages);
    
    })



  }

  
 


}




















    // this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
    //   console.log(this.Utilisateur.login)

    //   this.service.GetTotalTirage(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
    //     this.totaltirage=data.data;
    //     console.log(data)
    //     console.log(data.data.length)
    //   });