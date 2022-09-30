import { Component } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   //variable concernant le login
   login:String;
   password:String;
   /////

   Utilisateur:any
  constructor(private utilisateurService:UtilisateurService) {}

  logForm(){
    this.utilisateurService.login(this.login,this.password).subscribe(data=>{
      //on vas recupere le message de retour et voir si tout ses bien passe
      console.log(data)

      if(data.message=="ok"){
        this.Utilisateur=data.data;
        console.log(this.Utilisateur)
      }else if(data.message=="error"){
        console.log(data.data);
      }
    })
  }
}
