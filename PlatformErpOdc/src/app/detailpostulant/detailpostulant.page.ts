import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DesactiverpersonnelPage } from '../desactiverpersonnel/desactiverpersonnel.page';
import { ModifierpersonnelPage } from '../modifierpersonnel/modifierpersonnel.page';
import { SupprimerpersonnelPage } from '../supprimerpersonnel/supprimerpersonnel.page';

@Component({
  selector: 'app-detailpostulant',
  templateUrl: './detailpostulant.page.html',
  styleUrls: ['./detailpostulant.page.scss'],
})
export class DetailpostulantPage implements OnInit {

  modelData:any;
  constructor(private modalController:ModalController) { }

  async ModifierPersonnel() {
    const modal = await this.modalController.create({
      component: ModifierpersonnelPage,
      componentProps: {
        'model_title': "Modification personnel"
      }
    });
    
    modal.onDidDismiss().then((modelData)=>{
      if (modelData !== null) {
        this.modelData = this.modelData.data;
        console.log('Les donnés du Pop Up sont : ' + modelData.data);
      }
    });
    return await modal.present();
  }



  async DesactiverPersonnel() {
    const modal = await this.modalController.create({
      component: DesactiverpersonnelPage,
      componentProps: {
        'model_title': "Personnel desactiver"
      }
    });
    modal.onDidDismiss().then((modelData)=>{
      if (modelData !== null) {
        this.modelData = this.modelData.data;
        console.log('Les donnés du Pop Up sont : ' + modelData.data);
      }
    });
    return await modal.present();
  }


  
  async SupprimerPersonnel() {
    const modal = await this.modalController.create({
      component: SupprimerpersonnelPage,
      componentProps: {
        'model_title': "Modification personnel"
      }
    });
    
    modal.onDidDismiss().then((modelData)=>{
      if (modelData !== null) {
        this.modelData = this.modelData.data;
        console.log('Les donnés du Pop Up sont : ' + modelData.data);
      }
    });
    return await modal.present();
  }


  ngOnInit() {
  }

}
