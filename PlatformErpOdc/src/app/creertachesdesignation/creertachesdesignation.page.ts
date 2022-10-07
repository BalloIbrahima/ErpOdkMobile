import { Component, OnInit } from '@angular/core';
import { TachedesignationService } from '../services/tahedesignations/tachedesignation.service';

@Component({
  selector: 'app-creertachesdesignation',
  templateUrl: './creertachesdesignation.page.html',
  styleUrls: ['./creertachesdesignation.page.scss'],
})
export class CreertachesdesignationPage implements OnInit {

  Utilisateur : any;
  etatselect : string;
  nom : string;
  etat: boolean;
  if (etatselect = "Actif") {
    this.etat = true
  } elsif (etatselect = "Inactif") {
    this.etat = false
  }
  constructor( private tachedesign : TachedesignationService) { }

  ngOnInit() {
    this.Utilisateur = JSON.stringify(localStorage.getItem('utilisateur'));
  }

  creerDesignation() {
    this.tachedesign.creerDesignation(this.Utilisateur.login, this.Utilisateur.password, this.nom, this.etat).subscribe({
      next : reponse => {
        alert(reponse.data)
      },
      error : data => {
        alert(data.data)
      }
    })
  }

}
