import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailtirage',
  templateUrl: './detailtirage.page.html',
  styleUrls: ['./detailtirage.page.scss'],
})
export class DetailtiragePage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  page: number = 1;
  students =[
    {
      numero:'1',
      name: 'Kanoute',
        prenom: 'Rokiatou',
        email: 'rose@gmail.com',
        date: '2022-12-12'
    },
    {
      numero:'2',
      name: 'Samake',
        prenom: 'Kadidia',
        email: 'rose@gmail.com',
        date: '2022-12-12'
  },
  {
    numero:'3',

    name: 'Diallo',
        prenom: 'Abdoulaye',
        email: 'rose@gmail.com',
        date: '2022-12-12'
  },
  {
    numero:'4',

    name: 'Djenika',
    prenom: 'Aboubacar',
    email: 'rose@gmail.com',
    date: '2022-12-12'
  },
  {
    numero:'5',

    name: 'Kanoute',
        prenom: 'Rokiatou',
        email: 'rose@gmail.com',
        date: '2022-12-12'
  },
  {
    numero:'6',

    name: 'Samake',
    prenom: 'Kadidia',
    email: 'rose@gmail.com',

    date: '2022-12-12'
  },
  {
    numero:'7',

    name: 'Diallo',
    prenom: 'Abdoulaye',
    email: 'rose@gmail.com',
    date: '2022-12-12'
  },
  {
    numero:'8',
    name: 'Djiguiba',
    prenom: 'Barema',
    email: 'rose@gmail.com',
    date: '+223 8456789'
  },
  {
    numero:'9',
    name: 'Djenika',
    prenom: 'Aboubacar',
    email: 'rose@gmail.com',
    date: '2022-12-12'
  },
  {
    numero:'10',
    name: 'Djiguiba',
    prenom: 'Barema',
    email: 'rose@gmail.com',
    date: '+223 8456789'
  }

  ];

  constructor() { }

  ngOnInit() {
  }

}
