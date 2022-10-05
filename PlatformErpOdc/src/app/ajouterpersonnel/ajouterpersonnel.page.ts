import { Component, OnInit } from '@angular/core';
import { EntiteService } from '../services/entite/entite.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-ajouterpersonnel',
  templateUrl: './ajouterpersonnel.page.html',
  styleUrls: ['./ajouterpersonnel.page.scss'],
})
export class AjouterpersonnelPage implements OnInit {

  Entites:any;
  Utilisateur:any;

  constructor(private entiteService:EntiteService,private userService:UtilisateurService) { }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) 
    console.log(this.Utilisateur)

    this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=='ok'){
        this.Entites=data.data
        console.log(this.Entites)

      }
    })

  }

}
