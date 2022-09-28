import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.page.html',
  styleUrls: ['./personnels.page.scss'],
})
export class PersonnelsPage implements OnInit {
  rows=[{
  name:'keita',
  prenom:'Ali',
  genre:'Masculin',
  contact:556667,
  email:'djiguibabarema@gmail.com',
  action:'Voir +',
 },
];

  constructor() { }
  a!:any;

  ngOnInit() {
  }

}
