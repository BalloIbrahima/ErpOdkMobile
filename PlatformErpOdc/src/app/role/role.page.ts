import { Component, OnInit } from '@angular/core';
import { RoleService } from '../services/role/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.page.html',
  styleUrls: ['./role.page.scss'],
})
export class RolePage implements OnInit {
  Utilisateur: any;
  TousLesRole: any;

  // createEntite: any;
  // updateEntite: any;
  // readEntite: any;
  // deleteEntite: any;

  // createActivite: any;
  // updateActivite: any;
  // readActivite: any;
  // deleteActivite: any;

  // createSalle: any;
  // updateSalle: any;
  // readSalle: any;
  // deleteSalle: any;

  // createAouP: any;
  // updateAouP: any;
  // readAouP: any;
  // deleteAouP: any;

  // createDesignation: any;
  // updateDesignation: any;
  // readDesignation: any;
  // deleteDesignation: any;

  // createEtat: any;
  // updateEtat: any;
  // readEtat: any;
  // deleteEtat: any;

  // createFormatEmail: any;
  // updateFormatEmail: any;
  // readFormatEmail: any;
  // deleteFormatEmail: any;

  // createIntervenant: any;
  // updateIntervenant: any;
  // readIntervenant: any;
  // deleteIntervenant: any;

  // createListPostulant: any;
  // updateListPostulant: any;
  // readListPostulant: any;
  // deleteListPostulant: any;

  // createPostulant: any;
  // updatePostulant: any;
  // readPostulant: any;
  // deletePostulant: any;

  // createPresence: any;
  // updatePresence: any;
  // readPresence: any;
  // deletePresence: any;

  // createRole: any;
  // updateRole: any;
  // readRole: any;
  // deleteRole: any;

  // createTache: any;
  // updateTache: any;
  // readTache: any;
  // deleteTache: any;

  // createTirage: any;
  // updateTirage: any;
  // readTirage: any;
  // deleteTirage: any;

  // createUtilisateur: any;
  // updateUtilisateur: any;
  // readUtilisateur: any;
  // deleteUtilisateur: any;

  // createTypeActivite: any;
  // updateTypeActivite: any;
  // readTypeActivite: any;
  // deleteTypeActivite: any;

  constructor(private seriveRole: RoleService) { }
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
    {
      entite: 'Orange Digital Kalnso',
      descrription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eligendi harum tempora expedita sed officia molestiasquas eius culpa. Reprehenderit nam exercitationem error quidem hic molestiae, id ut illo consequuntur.',
      nom: 'Hamadoun Kaou DIALLO',
      status: 'Responsable',
    },
    {
      entite: 'Orange Digital Kalnso',
      descrription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eligendi harum tempora expedita sed officia molestiasquas eius culpa. Reprehenderit nam exercitationem error quidem hic molestiae, id ut illo consequuntur.',
      nom: 'Hamadoun Kaou DIALLO',
      status: 'Responsable',
    },
    {
      entite: 'Orange Digital Kalnso',
      descrription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eligendi harum tempora expedita sed officia molestiasquas eius culpa. Reprehenderit nam exercitationem error quidem hic molestiae, id ut illo consequuntur.',
      nom: 'Hamadoun Kaou DIALLO',
      status: 'Responsable',
    },
    {
      entite: 'Orange Digital Kalnso',
      descrription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eligendi harum tempora expedita sed officia molestiasquas eius culpa. Reprehenderit nam exercitationem error quidem hic molestiae, id ut illo consequuntur.',
      nom: 'Hamadoun Kaou DIALLO',
      status: 'Responsable',
    },
    {
      entite: 'Orange Digital Kalnso',
      descrription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eligendi harum tempora expedita sed officia molestiasquas eius culpa. Reprehenderit nam exercitationem error quidem hic molestiae, id ut illo consequuntur.',
      nom: 'Hamadoun Kaou DIALLO',
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
    this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
    this.seriveRole.getAllRole(this.Utilisateur.login, this.Utilisateur.password).subscribe(data =>{
      this.TousLesRole = data.data
      console.log(this.TousLesRole)
    })
  }

}
