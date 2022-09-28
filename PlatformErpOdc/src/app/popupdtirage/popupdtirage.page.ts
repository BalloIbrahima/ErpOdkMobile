import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popupdtirage',
  templateUrl: './popupdtirage.page.html',
  styleUrls: ['./popupdtirage.page.scss'],
})
export class PopupdtiragePage implements OnInit {
  a : number=1;
  students =[
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
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    genre: 'Masculin',
    email: 'djiguiba@orangemali.com',
    contact: '+223 8456789'
  }
  
  ];
  @Input() model_title: string;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

}
