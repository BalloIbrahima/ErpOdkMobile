import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.page.html',
  styleUrls: ['./personnels.page.scss'],
})
export class PersonnelsPage implements OnInit {
//   rows=[{
//   name:'keita',
//   prenom:'Ali',
//   genre:'Masculin',
//   contact:556667,
//   email:'djiguibabarema@gmail.com',
//   action:'Voir +',
//  },
// ];
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

  constructor() { }
   // eslint-disable-next-line @typescript-eslint/member-ordering, @typescript-eslint/type-annotation-spacing
   a!:any;

  ngOnInit() {
  }

}
