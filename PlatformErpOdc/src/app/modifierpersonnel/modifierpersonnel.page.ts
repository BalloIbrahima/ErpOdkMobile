import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-modifierpersonnel',
  templateUrl: './modifierpersonnel.page.html',
  styleUrls: ['./modifierpersonnel.page.scss'],
})
export class ModifierpersonnelPage implements OnInit {
  modal: any;

  // @Input() model_title : string;
  // constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  // async closeModel(){
  //   const close :string = "Modal Removed";
  //   await this.modalController.dismiss(close);
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
