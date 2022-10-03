import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { DesactiverpersonnelPage } from '../desactiverpersonnel/desactiverpersonnel.page';
import { ModifierpersonnelPage } from '../modifierpersonnel/modifierpersonnel.page';
import { SupprimerpersonnelPage } from '../supprimerpersonnel/supprimerpersonnel.page';
import Swal from 'sweetalert2';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-detailpostulant',
  templateUrl: './detailpostulant.page.html',
  styleUrls: ['./detailpostulant.page.scss'],
})
export class DetailpostulantPage implements OnInit {

  modelData:any;
  constructor(private modalController:ModalController) { }

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
          //Swal.fire('Saved!', '', 'success');
        } else if (result.isDenied) {
          //Swal.fire('Changes are not saved', '', 'info');
        }
      });
    }

  async ModifierPersonnel() {
    const modal = await this.modalController.create({
      component: ModifierpersonnelPage,
      componentProps: {
        'model_title': "Modification personnel"
      }
    });
    
    modal.onDidDismiss().then((modelData)=>{
      if (modelData !== null) {
        this.modelData = this.modelData.data;
        console.log('Les donnés du Pop Up sont : ' + modelData.data);
      }
    });
    return await modal.present();
  }



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


  ngOnInit() {
  }

  @ViewChild(IonModal) modal: IonModal;

  // message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  // name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: Event) {
    // const ev = event as CustomEvent<OverlayEventDetail<string>>;
    // if (ev.detail.role === 'confirm') {
    //   this.message = `Modication effectué avec, ${ev.detail.data}!`;
    // }
  }

}
