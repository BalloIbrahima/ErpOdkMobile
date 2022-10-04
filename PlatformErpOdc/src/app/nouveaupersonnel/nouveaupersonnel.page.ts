import { Component, OnInit } from '@angular/core';
import { EntiteService } from '../services/entite/entite.service';
import { RoleService } from '../services/role/role.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-nouveaupersonnel',
  templateUrl: './nouveaupersonnel.page.html',
  styleUrls: ['./nouveaupersonnel.page.scss'],
})
export class NouveaupersonnelPage implements OnInit {

  Entites:any;
  Utilisateur:any;
  Roles:any;
  formatMail:any;

  constructor(private entiteService:EntiteService,private roleservice:RoleService,private userService:UtilisateurService) { }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) 
    console.log(this.Utilisateur)

    this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=='ok'){
        this.Entites=data.data
        console.log(this.Entites)

      }
    })

    this.roleservice.getListeRole(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=="ok"){
        this.Roles=data.data
        console.log(this.Roles)
      }
    })

    this.roleservice.getListeFormatMail(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=="ok"){
        this.formatMail=data.data
        console.log(this.formatMail)
      }
    })
    
    
  }

  CreateUser(){
    
  }

}
