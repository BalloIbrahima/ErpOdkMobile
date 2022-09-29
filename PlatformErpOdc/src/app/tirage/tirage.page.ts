import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupdtiragePage } from '../popupdtirage/popupdtirage.page';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.page.html',
  styleUrls: ['./tirage.page.scss'],
})
export class TiragePage implements OnInit {
  modelData: any;
  constructor(public modalController: ModalController) { }
  students =[
    {
        name: 'Sagara',
        prenom: 'Jean',
        genre: 'Masculin',
        email: 'djiguiba@orangemali.com',
        contact: '+223 8456789'
    },
    {
      name: 'Djiguiba',
      prenom: 'Barema',
      genre: 'Masculin',
      email: 'djiguiba@orangemali.com',
      contact: '+223 8456789'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  }
  
  ];
  async ouvrirPopup() {
    const modal = await this.modalController.create({
      component: PopupdtiragePage,
      componentProps: {
        'valider': true,
        'donnee_tableau': this.students
      },
      backdropDismiss: false
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
