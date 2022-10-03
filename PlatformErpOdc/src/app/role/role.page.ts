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
      descrription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eligendi harum tempora expedita sed officia molestiasquas eius culpa. Reprehenderit nam exercitationem error quidem hic molestiae, id ut illo consequuntur.',
      nom: 'Ousmane TOURE',
      status: 'Responsable',
    },
    {
      entite: 'Orange Digital Kalnso',
      descrription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eligendi harum tempora expedita sed officia molestiasquas eius culpa. Reprehenderit nam exercitationem error quidem hic molestiae, id ut illo consequuntur.',
      nom: 'Hamadoun Kaou DIALLO',
      status: 'Responsable',
    },
  ];

  ngOnInit() {
  }

}
