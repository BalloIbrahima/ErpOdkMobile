import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-des-listes',
  templateUrl: './detail-des-listes.page.html',
  styleUrls: ['./detail-des-listes.page.scss'],
})
export class DetailDesListesPage implements OnInit {
  searchText:any;
  p:any;
  nombreList:Number=0;
  nombreTirage:Number=0;

  constructor( /*public listeService:ListeService,public tirageService:TirageService*/) { }

  ngOnInit(): void {
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
