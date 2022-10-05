import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PopupdtiragePage } from '../popupdtirage/popupdtirage.page';
import { ActiviteService } from '../services/activite/activite.service';
import { ListeService } from '../services/listes/liste.service';
import { TirageService } from '../services/tirage/tirage.service';
import { TypeActiviteService } from '../services/typeActivite/type-activite.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.page.html',
  styleUrls: ['./tirage.page.scss'],
})
export class TiragePage implements OnInit {
  
  listes: any;
  nom: any;
  Utilisateur:any;
  modelData: any;

  libelletirage:any;
  idactivite:any;
  libelleListe:any;
  activiteSelect: any;
  nombre:any;
  


  constructor(private tirageService: TirageService,public modalController: ModalController,private listeService:ListeService,private activiteService:ActiviteService,private userService:UtilisateurService,private alertController: AlertController) { }
 
  async ouvrirPopup(data) {
    const modal = await this.modalController.create({
      component: PopupdtiragePage,
      componentProps: {
        'data': data,
        
      },
      backdropDismiss: false
    });
    modal.onDidDismiss().then((modelData)=>{
      if (modelData !== null) {
        this.modelData = this.modelData.data;
        console.log('Les données du Pop Up sont : ' + modelData.data);
      }
    });
    return await modal.present();
  }
  async popupExist() {
    const alert = await this.alertController.create({
      header: 'Desolé',
      subHeader: 'Ce tirage existe déjà',
      buttons: ['OK'],
    });

    await alert.present();
  }


  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;
    this.listeService.GetAllListe(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.listes=retour.data
      console.log(this.listes)
    })

      this.activiteService.GetTtActivite(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.nom=retour.data;
      console.log(this.nom)
    })
  }
  FaireTirage(){

    for(let i=0;i<this.nom.length;i++){
      if(this.nom[i].nom==this.idactivite){
        this.activiteSelect=this.nom[i]
        console.log(this.activiteSelect)
      }
    }

    this.tirageService.doTirage(this.Utilisateur.login, this.Utilisateur.password,this.libelleListe,this.activiteSelect.id,this.nombre,this.libelletirage).subscribe(retour=>{
      if(retour.message=='ok'){
        console.log(retour)
        this.ouvrirPopup(retour.data)
        console.log(retour.data)
      }else{
        this.popupExist()
      }
      
    })
    
  }

}
