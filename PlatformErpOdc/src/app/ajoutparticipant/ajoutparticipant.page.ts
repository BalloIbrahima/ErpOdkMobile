import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite/activite.service';

@Component({
  selector: 'app-ajoutparticipant',
  templateUrl: './ajoutparticipant.page.html',
  styleUrls: ['./ajoutparticipant.page.scss'],
})
export class AjoutparticipantPage implements OnInit {
  Utilisateur:any
  participants:any
  activiteselect:any
  longueur:any
  //ngmodel
 /**nomactivite */ nom:any
   nomparticipant:any
   prenom:any
   daten:any
   email:any
   numero:any

   id:any

  constructor(private activiteService:ActiviteService,private route:ActivatedRoute, private  alertController:AlertController) { }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'))
    const idactivite=this.route.snapshot.params['id']
    this.id=idactivite
     console.log("recuperation de l'utilisateur "+this.Utilisateur)

     this.activiteService.getactivitybyId(this.Utilisateur.login,this.Utilisateur.password,idactivite).subscribe(r=>{
      this.activiteselect=r.data;
      console.log(this.activiteselect)
      this.nom=this.activiteselect.nom
    })




  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Validé!!!',
      subHeader: 'Participant crée avec Succès!',
      buttons: ['OK'],
    });

    await alert.present();
  }


  ajoutparticipant(){
    var idact=0;

    //recuperation de l'id d'activite
    for(let i=0 ; i<this.activiteselect.length; i++){
      if(this.activiteselect[i].libelle==this.nom){
        idact=this.activiteselect[i].id
      }
    }

      //creation de l'activite
      var participant=[{
        "nom":this.nomparticipant,
        "prenom":this.prenom,
        "email":this.email,
        "numero":this.numero,
        "dateNaissance":this.daten,

      }]
      console.log(this.id)

    this.activiteService.ajoutpartticipant(this.Utilisateur.login,this.Utilisateur.password,this.id,participant).subscribe(data=>{
      console.log(data)
      this.presentAlert()
      // if(data.message == "ok") {
      //   this.presentAlert()idact
      // } else {
      //   this.notpresent()
      // }

    })
  }


  
}
