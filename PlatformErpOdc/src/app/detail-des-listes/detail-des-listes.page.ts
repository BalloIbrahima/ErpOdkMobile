import { Component, OnInit } from '@angular/core';
import { DetailListPostService } from '../services/detailListe/detail-list-post.service';

@Component({
  selector: 'app-detail-des-listes',
  templateUrl: './detail-des-listes.page.html',
  styleUrls: ['./detail-des-listes.page.scss'],
})
export class DetailDesListesPage implements OnInit {
  Utilisateur:any;
  listpost:any;
  page: number = 1;

  constructor( public listeService:DetailListPostService /*public listeService:ListeService,public tirageService:TirageService*/) { }

  ngOnInit(): void {

    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
    console.log(this.Utilisateur.login)

    this.listeService.getListPost(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      this.listpost=data.data;
    console.log(this.listpost)
    });


    // //TOUTES LES ACTIVITES :::::::::::::::::::::
    // this.service.GetToutesActivites(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
    //   this.touteactivite=data.data;
    //   console.log(this.touteactivite)
    // });

    /*recupeartion de l'ensemble des listes
    this.listeService.getListe().subscribe(donne=>{
      console.log(donne.message)
      console.log(donne.data.length)

      if(donne.message=="ok"){
        this.listeService.liste=donne.data
      }

    })

    //recupeartion du nombre de tirage
    this.tirageService.getNombre().subscribe(donne=>{
      console.log(donne.message)
      console.log(donne.data.length)

      if(donne.message=="ok"  && donne.data!=null){
        this.nombreTirage=donne.data
      }

    })

    //recupeartion du nombre de listes
    this.listeService.getNombreListe().subscribe(donne=>{
      console.log(donne.data.length)
      if(donne.message=="ok"  && donne.data!=null){
        this.nombreList=donne.data
      }

    })*/
  }
}
