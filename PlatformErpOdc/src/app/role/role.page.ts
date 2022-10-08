import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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

  ngOnInit() {
    this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
    this.seriveRole.getAllRole(this.Utilisateur.login, this.Utilisateur.password).subscribe(data =>{
      this.TousLesRole = data.data
      console.log(this.TousLesRole)
    })
  }

  supprimerRole(idrole: any){
    this.seriveRole.deleteRole(this.Utilisateur.login, this.Utilisateur.password, idrole).subscribe(data =>{
      console.log(data)
    })
  }

  //Le pop montrant la suppression du role
  popUp() {
    Swal.fire({
      title: 'Félicitation !!',
      text: 'Entité créée avec succes',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "D'accord",
      confirmButtonColor: 'green',
      showDenyButton: false,
      showCancelButton : false,
      allowOutsideClick: false
    })
  }

}
