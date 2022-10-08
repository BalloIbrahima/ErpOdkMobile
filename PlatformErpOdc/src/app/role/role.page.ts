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

  TousLesDroits: any;
  creation = 'Create'
  read = 'Read'
  update = 'Update'
  supprimer = 'Delete'
  libelleRole!: any


  //Variables utiliser lors de creation d'un role

  LibelleRoleLecture = new Array();
  LibelleRoleCreation = new Array();
  LibelleRoleUpdate = new Array();
  LibelleRoleSuppression = new Array();
  currentRoleCreate: any;
  idrole: any;
  libelleRole2: String;
  currentRoleCreate2: any;

  constructor(private seriveRole: RoleService) { }
  // eslint-disable-next-line @typescript-eslint/member-ordering

  ngOnInit() {
    this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
    this.getAllRole();

    this.seriveRole.getAllDroit(this.Utilisateur.login, this.Utilisateur.password).subscribe(donne => {
      this.TousLesDroits = donne.data
      console.log(this.TousLesDroits)

      for (let i = 0; i < this.TousLesDroits.length; i++) {
        console.log(this.TousLesDroits[0])
        if (this.TousLesDroits[i].libelle.split(' ')[0] == this.read) {

          this.LibelleRoleLecture.push(this.TousLesDroits[i])
          console.log(this.LibelleRoleLecture)
        } else if (this.TousLesDroits[i].libelle.split(' ')[0] == this.creation) {
          this.LibelleRoleCreation.push(this.TousLesDroits[i])
        } else if (this.TousLesDroits[i].libelle.split(' ')[0] == this.update) {
          this.LibelleRoleUpdate.push(this.TousLesDroits[i])
        } else {
          this.LibelleRoleSuppression.push(this.TousLesDroits[i])
          // console.log(this.LibelleRoleSuppression)
        }
      }
    })
  }
  getAllRole() {

    this.seriveRole.getAllRole(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
      this.TousLesRole = data.data
      console.log(this.TousLesRole)
    })
  }

  supprimerRole(idrole: any) {


    Swal.fire({
      position: 'center',
      title: 'Voulez-vous supprimer ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Oui',
      denyButtonText: `Non`,
      imageUrl: '../../assets/images/alert.gif',
      imageWidth: '100px',
      imageHeight: '100px',
      denyButtonColor: 'red',
      // cancelButtonText: 'Annuler',
      cancelButtonColor: 'red',
      confirmButtonColor: 'green',
      heightAuto: false,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //Swal.fire('Saved!', '', 'success');
        // this.salleService.deleteSalle(this.Utilisateur.login,this.Utilisateur.password,idSalle).subscribe(data=>{
        //   if(data.message=="ok"){
        //     this.callSalle()
        //   }
        // });
        this.seriveRole.deleteRole(this.Utilisateur.login, this.Utilisateur.password, idrole).subscribe(data => {
          console.log(data)
          if (data.message == "ok") {
            this.getAllRole()
          }
        })

      } else if (result.isDenied) {
        //Swal.fire('Changes are not saved', '', 'info');
        //  this.route.navigate(['tirage'])
      }
    });

  }


  //Le pop montrant la suppression du role


  compareWith(o1, o2) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((o) => o.id === o1.id);
    }

    return o1.id === o2.id;
  }

  handleChange(ev) {
    this.currentRoleCreate = ev.target.value;
  }
  postRole() {
    if (this.libelleRole == '' || this.currentRoleCreate == null) {
      Swal.fire({
        position: 'center',
        title: 'Veuillez indiquer le nom du rôle',
        imageUrl: '../../assets/img/Yes_check.svg.png',
        imageWidth: '100px',
        imageHeight: '100px',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#FF7900',
        heightAuto: false,
      })
    } else {
      this.seriveRole.postRole(this.Utilisateur.login, this.Utilisateur.password, this.libelleRole, this.currentRoleCreate).subscribe(data => {
        console.log(data)
        if (data.message = 'ok')
          this.getAllRole()
      })
      Swal.fire({
        position: 'center',
        title: 'Rôle crée avec succes',

        confirmButtonText: 'Ok',
        confirmButtonColor: '#FF7900',
        heightAuto: false,
      })
    }

  }
  isModalOpen = false;
  setOpen(isOpen: boolean, idRole){
    this.isModalOpen = isOpen;
    this.idrole = idRole
  }

  handleChange1(ev) {
    this.currentRoleCreate2 = ev.target.value;
  }
  updateRole(){
    
    this.seriveRole.updateRole(this.Utilisateur.login, this.Utilisateur.password,this.libelleRole2,this.currentRoleCreate2, this.idrole).subscribe(data =>{
      console.log(data)
    })
  }

  setClose(isOpen: boolean){
    this.isModalOpen = isOpen
  }



}
