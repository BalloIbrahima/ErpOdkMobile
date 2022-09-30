import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NouvelleEntitePage } from '../nouvelle-entite/nouvelle-entite.page';

@Component({
  selector: 'app-entite',
  templateUrl: './entite.page.html',
  styleUrls: ['./entite.page.scss'],
})

export class EntitePage implements OnInit {
  modelData: any;
  constructor(private modalController: ModalController) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  info = [
    {
      entite: 'Orange Digital Center',
      // eslint-disable-next-line max-len
      descrription: 'Orange Digital Kalanso est une école du code, centre à vocation technologique qui propose des formations sur les métiers du numérique et des animations.',
      nom: 'Ousmane DIALLO',
      status: 'Responsable',
    },
    {
      entite: 'Orange Digital Kalnso',
      descrription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolores eos! Soluta cumque nulla, sunt quasi voluptas dolorum in harum ratione, assumenda itaque, suscipit magnam facilis. Corporis vitae quod deleniti.',
      nom: 'Hamadou Kaou DIALLO',
      status: 'Responsable',
    },
    {
      entite: 'Orange Fab',
      descrription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolores eos! Soluta cumque nulla, sunt quasi voluptas dolorum in harum ratione, assumenda itaque, suscipit magnam facilis. Corporis vitae quod deleniti.',
      nom: 'MALICK',
      status: 'Responsable',
    },
  ];

  async nouvelleent() {
    const modal = await this.modalController.create({
      component: NouvelleEntitePage,
      componentProps: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        model_title: 'Nouvelle entite'
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
