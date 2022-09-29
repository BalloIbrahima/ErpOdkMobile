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
        name: 'Kanoute',
        prenom: 'Rokiatou',
        date: '2022-12-12'
    },
    {
      name: 'Samake',
        prenom: 'Kadidia',
        date: '2022-12-12'
  },
  {
    name: 'Diallo',
        prenom: 'Abdoulaye',
        date: '2022-12-12'
  },
  {
    name: 'Djenika',
    prenom: 'Aboubacar',
    date: '2022-12-12'
  },
  {
    name: 'Kanoute',
        prenom: 'Rokiatou',
        date: '2022-12-12'
  },
  {
    name: 'Samake',
    prenom: 'Kadidia',
    date: '2022-12-12'
  },
  {
    name: 'Diallo',
    prenom: 'Abdoulaye',
    date: '2022-12-12'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    date: '+223 8456789'
  },
  {
    name: 'Djenika',
    prenom: 'Aboubacar',
    date: '2022-12-12'
  },
  {
    name: 'Djiguiba',
    prenom: 'Barema',
    date: '+223 8456789'
  }

  ];

  constructor() { }

  ngOnInit() {
  }

}
