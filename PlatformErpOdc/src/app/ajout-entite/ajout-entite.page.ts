import { Component, OnInit } from '@angular/core';
import { SalleServiceService } from '../services/salles/salle-service.service';

@Component({
  selector: 'app-ajout-entite',
  templateUrl: './ajout-entite.page.html',
  styleUrls: ['./ajout-entite.page.scss'],
})
export class AjoutEntitePage implements OnInit {

  constructor(private service : SalleServiceService) { }

  ngOnInit() {
  }

  description:String="";
  libelleentite:String="";
  AjoutEntite(){
    this.service.ajoutEntite(this.description,this.libelleentite).subscribe(data=>{
      console.log(data)

    });
}

ToutEntite(){
  this.service.ToutEntite().subscribe(data=>{
    console.log(data)
  }
);
}
}
