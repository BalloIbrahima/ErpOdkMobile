import{ Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AccueilserviceService } from '../services/acceuil/accueilservice.service';

import { EntiteService } from '../services/entite/entite.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { NouvelleEntitePage } from '../nouvelle-entite/nouvelle-entite.page';

@Component({
  selector: 'app-entite',
  templateUrl: './entite.page.html',
  styleUrls: ['./entite.page.scss'],
})

export class EntitePage implements OnInit {
  modelData: any;
  alertTrue: boolean = false;
  alertFalse: boolean = false;

  constructor(private alertController: AlertController,private modalController: ModalController, private entiteService:EntiteService,private acceuilService: AccueilserviceService,
    private userService: UtilisateurService, private router: Router, private route:ActivatedRoute) { }

  longueur:any

  Utilisateur: any;
  donneEntite: any;
  libelleentite: any;
  description: any;
  imageentite: any;
  toutUtilisateur: any;
  responsableEntite: any;
  lead: any;
  donner:any


  // eslint-disable-next-line @typescript-eslint/member-ordering
  info = [
    {
      entite: 'Orange Digital Center',
      // eslint-disable-next-line max-len
      descrription: 'Orange Digital Kalanso est une école du code, centre à vocation technologique qui propose des formations sur les métiers du numérique et des animations.',
      nom: 'Ousmane DIALLO',
      status: 'Responsable',
      imag: './assets/img/fablab.png'
    },
    {
      entite: 'Orange Digital Kalnso',
      descrription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolores eos! Soluta cumque nulla, sunt quasi voluptas dolorum in harum ratione, assumenda itaque, suscipit magnam facilis. Corporis vitae quod deleniti.',
      nom: 'Hamadou Kaou DIALLO',
      status: 'Responsable',
      imag: './assets/img/kalanso.png'
    },
    {
      entite: 'Orange Fab',
      descrription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolores eos! Soluta cumque nulla, sunt quasi voluptas dolorum in harum ratione, assumenda itaque, suscipit magnam facilis. Corporis vitae quod deleniti.',
      nom: 'MALICK',
      status: 'Responsable',
      imag: './assets/img/orangefab.png'
    },
  ];


  entites:any;
  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
    console.log("recuperantion l'utilisateur"+this.Utilisateur)
    this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=='ok'){
        this.entites=data.data
        this.longueur=data.data.length
        console.log("nos entites "+data.data)
      }
    })
    this.userService.getActivesUsers(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
      this.toutUtilisateur = data.data;
      
      console.log(data.data[1].nom)

    })
  }

  //Methode permettant de recuperer les entite

  getAllEntite(){
    this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=='ok'){
        this.entites=data.data
        this.longueur=data.data.length
        console.log("nos entites "+data.data)
      }
    })

  }

 
  recuperationImage(event: any) {

    this.imageentite = event.target["files"][0];
    console.log(this.imageentite)
  }
//Redirection voir +

RedirigerEntite(id:number){
  return this.router.navigate(['/dashboard/details-entite',id]);
  
}
  
  // methode permettant de creer une entite
  alet(): void {
    setTimeout(() => {
        this.getAllEntite();
    }, 1000);
  }
  postAllEntite() {
    console.log(this.imageentite+" libelleentite : "+this.libelleentite+"description : "+this.description+"responsable : "+this.responsableEntite)
    for(let i = 0; i< this.toutUtilisateur.length; i++){

      const array=this.responsableEntite.split(' ')

      if(this.toutUtilisateur[i].prenom==array[0] && this.toutUtilisateur[i].nom==array[1]){   
        this.lead =this.toutUtilisateur[i]
      }
    }
    this.entiteService.PostEntite(this.Utilisateur.login, this.Utilisateur.password, this.imageentite, this.libelleentite, this.description, this.Utilisateur, this.lead).subscribe(data => {
      console.log(data.message);
      this.donner = data
      if(this.donner.message == 'ok'){
        this.alertTrue = true
        this.alertFalse = false
      }else{
        this.alertTrue = false
        this.alertFalse = true
      }
    })
      this.alet();
    // this.presentAlert()
  }


  // methode permettant d'afficher le popup
  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Are you sure?',
  //     cssClass: 'custom-alert',
  //     buttons: [
  //       {
  //         text: 'No',
  //         cssClass: 'alert-button-cancel',
  //       },
  //       {
  //         text: 'Yes',
  //         cssClass: 'alert-button-confirm',
  //       },
  //     ],
  //   });

  //   await alert.present();
  // }

}
