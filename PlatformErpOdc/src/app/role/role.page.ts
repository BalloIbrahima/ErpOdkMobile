import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.page.html',
  styleUrls: ['./role.page.scss'],
})
export class RolePage implements OnInit {

  constructor() { }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  info = [
    {
      entite: 'Orange Digital Center',
      descrription: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      nom: 'Kaou',
      status: 'Responsable',
    },
    {
      entite: 'Orange Digital Kalnso',
      descrription: 'iiiiiiiiiiiiiiii',
      nom: 'Kaous',
      status: 'Responsablez',
    },
  ];

  ngOnInit() {
  }

}
