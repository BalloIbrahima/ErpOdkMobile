import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite/activite.service';
import { EntiteService } from '../services/entite/entite.service';

@Component({
  selector: 'app-reporting-participant',
  templateUrl: './reporting-participant.page.html',
  styleUrls: ['./reporting-participant.page.scss'],
})
export class ReportingParticipantPage implements OnInit {
a:any;
utilisateur : any;
  activites : any;
  entites : any;
  nomactivite : any;
  typeactivite : any;
  entiteselect : any;
  datedebut : Date;
  datefin : Date;

  constructor(private serviceactivite : ActiviteService, private serviceentite : EntiteService) { }
  // accueil=[
  //   {nom:"ali"},
  //   {activite:"ndckc"},
  // ]
  ngOnInit() {
    this.utilisateur = JSON.parse(localStorage.getItem('utilisateur'))
    this.serviceactivite.GetTtActivite(this.utilisateur.login,this.utilisateur.password).subscribe(
      reponse => {
        this.activites = reponse.data;
        console.log(this.activites)
      }
    )
    this.serviceentite.getAllEntites(this.utilisateur.login,this.utilisateur.password).subscribe(
      reponse => {
        this.entites = reponse.data
        console.log(this.entites)
      }
    )
  }
  filtrerActivite() {
    console.log(this.nomactivite)
    console.log(this.datedebut)
    console.log(this.datefin)
    console.log(this.typeactivite)
    console.log(this.entiteselect)
   
  }
    
  }


