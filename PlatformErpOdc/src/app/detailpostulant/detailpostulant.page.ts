import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { DesactiverpersonnelPage } from '../desactiverpersonnel/desactiverpersonnel.page';
import { ModifierpersonnelPage } from '../modifierpersonnel/modifierpersonnel.page';
import { SupprimerpersonnelPage } from '../supprimerpersonnel/supprimerpersonnel.page';
import Swal from 'sweetalert2';
import { OverlayEventDetail } from '@ionic/core/components';
import { RoleService } from '../services/role/role.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';
import { EntiteService } from '../services/entite/entite.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailpostulant',
  templateUrl: './detailpostulant.page.html',
  styleUrls: ['./detailpostulant.page.scss'],
})
export class DetailpostulantPage implements OnInit {

  formatMailperonnel:any;
  modelData:any;
  Utilisateur:any;
  Roles:any;
  Entites:any;
  AllUser:any;
  message:string;
  name:any;
  idUser: any;
  nom: any;
  prenom: any;
  users: any;
  genre: any;
  email: any;
  image: File;
  statusUser: any;
  nomEntite: any;

  constructor(private modalController:ModalController,private entiteService:EntiteService,private roleservice:RoleService,private userService:UtilisateurService,
    private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {

    this.idUser = this.route.snapshot.params['id'];
    console.log(this.idUser)

    
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) 
    console.log(this.Utilisateur)

    this.userService.DetailsUserById(this.Utilisateur.login, this.Utilisateur.password, this.idUser).subscribe(data => {
      this.users = data.data
      console.log(this.users)
      this.nom = this.users.nom
      this.prenom = this.users.prenom
      this.genre = this.users.genre
      this.email = this.users.email
      this.image = this.users.image
      this.nomEntite = this.users.monEntite.libelleentite
      this.statusUser = this.users.role.libellerole
    })


    this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=='ok'){
        this.Entites=data.data
        console.log(this.Entites)

      }
    })

    this.roleservice.getAllRole(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=="ok"){
        this.Roles=data.data
        console.log(this.Roles)
      }
    })


    this.roleservice.getListeFormatMail(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=="ok"){
        this.formatMailperonnel=data.data
        console.log(this.formatMailperonnel)
      }
    })

    this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=='ok'){
        this.Entites=data.data
        console.log(this.Entites)
      }
    })

    }


    envoyerImage(event: any){
      this.image = event.target["files"][0];
      console.log(this.image)
    }
  


  DeletePersonnel() {
    //   Swal.fire({'Félicitations ...', 'Fichier importer avec succès !', 'success',
    // });
      Swal.fire({
        title: "Attention vous sûr de vouloir SUPPRIMER le personnel",
        showConfirmButton: true,
        confirmButtonText: "Oui",
        confirmButtonColor: 'green',
        showCancelButton: true,
        cancelButtonText: "Non",
        cancelButtonColor: 'red',
        heightAuto: false
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          //Swal.fire('Saved!', '', 'success');
        } else if (result.isDenied) {
          //Swal.fire('Changes are not saved', '', 'info');
        }
      });
    }
    

    DPersonnel() {
      Swal.fire({
        title: "Attention vous sûr de vouloir DESACTIVER le personnel",
        showConfirmButton: true,
        confirmButtonText: "Oui",
        confirmButtonColor: 'green',
        showCancelButton: true,
        cancelButtonText: "Non",
        cancelButtonColor: 'red',
        heightAuto: false
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          // Swal.fire('Saved!', '', 'success');
        } else if (result.isDenied) {
          // Swal.fire('Changes are not saved', '', 'info');
        }
      });
    }

    UpdateUser(){

    }
  // async ModifierPersonnel() {
  //   const modal = await this.modalController.create({
  //     component: ModifierpersonnelPage,
  //     componentProps: {
  //       'model_title': "Modification personnel"
  //     }
  //   });
    
  //   modal.onDidDismiss().then((modelData)=>{
  //     if (modelData !== null) {
  //       this.modelData = this.modelData.data;
  //       console.log('Les donnés du Pop Up sont : ' + modelData.data);
  //     }
  //   });
  //   return await modal.present();
  // }



  // async DesactiverPersonnel() {
  //   const modal = await this.modalController.create({
  //     component: DesactiverpersonnelPage,
  //     componentProps: {
  //       'model_title': "Personnel desactiver"
  //     }
  //   });
  //   modal.onDidDismiss().then((modelData)=>{
  //     if (modelData !== null) {
  //       this.modelData = this.modelData.data;
  //       console.log('Les donnés du Pop Up sont : ' + modelData.data);
  //     }
  //   });
  //   return await modal.present();
  // }



  // async SupprimerPersonnel() {
  //   const modal = await this.modalController.create({
  //     component: SupprimerpersonnelPage,
  //     componentProps: {
  //       'model_title': "Modification personnel"
  //     }
  //   });
    
  //   modal.onDidDismiss().then((modelData)=>{
  //     if (modelData !== null) {
  //       this.modelData = this.modelData.data;
  //       console.log('Les donnés du Pop Up sont : ' + modelData.data);
  //     }
  //   });
  //   return await modal.present();
  // }




  @ViewChild(IonModal) modal: IonModal;

  // message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  // name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }
  confirmP() {
    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: Event) {
    // const ev = event as CustomEvent<OverlayEventDetail<string>>;
    // if (ev.detail.role === 'ConfirmVariale') {
    //   this.name = `${ev.detail.data}!`;
    //   console.log(this.name);
    // }
  }

  // onWillDismiss(event: Event) {
  //   const ev = event as CustomEvent<OverlayEventDetail<string>>;
  //   if (ev.detail.role === 'confirm') {
  //     this.message = `Modication effectué avec, ${ev.detail.data}!`;
  //   }
  // }



  // @ViewChild(IonModal) modal: IonModal;

  // message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  // name: string;

  // cancel() {
  //   this.modal.dismiss(null, 'cancel');
  // }

  // confirm() {
  //   this.modal.dismiss(this.name, 'confirm');
  // }

  // onWillDismiss(event: Event) {
  //   const ev = event as CustomEvent<OverlayEventDetail<string>>;
  //   if (ev.detail.role === 'confirm') {
  //     this.message = `Hello, ${ev.detail.data}!`;
  //   }
  // }

}
