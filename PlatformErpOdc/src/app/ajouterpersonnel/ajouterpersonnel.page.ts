import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { EntiteService } from '../services/entite/entite.service';
import { RoleService } from '../services/role/role.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-ajouterpersonnel',
  templateUrl: './ajouterpersonnel.page.html',
  styleUrls: ['./ajouterpersonnel.page.scss'],
})
export class AjouterpersonnelPage implements OnInit {

  Entites:any;
  Utilisateur:any;
  Genre: number;
  genre: string;
  EntiteSelectioner: any;
  RoleSelectionner: any;
  entite: any;
  Roles: any;
  role: any;
  numero:any;
  nom:any;
  prenom:any;
  email:any;
  domaine:any;
  formatMail: any;

  constructor(private roleservice:RoleService, private alertController : AlertController,private entiteService:EntiteService,private userService:UtilisateurService) { }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) 
    console.log(this.Utilisateur)

    this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=='ok'){
        this.Entites=data.data
        console.log(this.Entites)

      }
    })

    this.roleservice.getListeFormatMail(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=="ok"){
        this.formatMail=data.data
        console.log(this.formatMail)
      }
    })

    this.roleservice.getAllRole(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=="ok"){
        this.Roles=data.data
        console.log(this.Roles)
      }
    })

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Validé!!!',
      subHeader: 'Personnel externe créée avec Succès!!',

      buttons: ['OK'],
    });

    await alert.present();
  }
  async notpresent() {
    const alert = await this.alertController.create({
      header: 'Personnel externe non créée!!!',
      subHeader: 'veuillez réessayer!!',

      buttons: ['OK'],
    });

    await alert.present();
  }


  CreateIntervenant(){

    for(let i=0; i<this.Roles.length;i++){
      if(this.Roles[i].libellerole==this.role){
        this.RoleSelectionner=this.Roles[i]
      }
    }

    console.log(this.RoleSelectionner)
   
    if(this.genre == 'Masculin')
    {
      this.Genre = 0
    }else{
      this.Genre = 1
    }
    this.userService.CreateUserExterne(this.Utilisateur.login,this.Utilisateur.password,this.email+this.domaine,this.Genre,this.nom,this.prenom,this.numero,this.RoleSelectionner).subscribe(retour=>{
      console.log(retour)
      this.presentAlert()
    })
  }

}
