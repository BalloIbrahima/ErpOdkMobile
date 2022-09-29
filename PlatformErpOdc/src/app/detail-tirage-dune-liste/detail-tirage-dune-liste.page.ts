import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-tirage-dune-liste',
  templateUrl: './detail-tirage-dune-liste.page.html',
  styleUrls: ['./detail-tirage-dune-liste.page.scss'],
})
export class DetailTirageDuneListePage implements OnInit {

  p: number=1;

  students =[
    {
      
      numero:'1',
      libelle: 'Kanoute',
      date: '2022-12-12',
        nbr: '20',
        etat:'valide'
       
    },
    {
      numero:'2',
      libelle: 'Kanoute',
      date: '2022-12-12',
        nbr: '20',
        etat:'valide'
  },
  {
    numero:'3',

    libelle: 'Kanoute',
      date: '2022-12-12',
        nbr: '20',
        etat:'valide'
  },
  {
    numero:'4',

    libelle: 'Kanoute',
    date: '2022-12-12',
      nbr: '20',
      etat:'valide'
  },
  {
    numero:'5',

    libelle: 'Kanoute',
      date: '2022-12-12',
        nbr: '20',
        etat:'valide'
  },
  {
    numero:'6',

    libelle: 'Kanoute',
    date: '2022-12-12',
      nbr: '20',
      etat:'valide'
  },
  {
    numero:'7',

    libelle: 'Kanoute',
    date: '2022-12-12',
      nbr: '20',
      etat:'valide'
  },
  {
    numero:'8',
    libelle: 'Kanoute',
    date: '2022-12-12',
      nbr: '20',
      etat:'valide'
  },
  {
    numero:'9',
    libelle: 'Kanoute',
    date: '2022-12-12',
      nbr: '20',
      etat:'valide'
  },
  {
    numero:'10',
    libelle: 'Kanoute',
      date: '2022-12-12',
        nbr: '20',
        etat:'valide'
  }

  ];
  constructor() { }

  ngOnInit() {
  }

}
