import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modifierpersonnel',
  templateUrl: './modifierpersonnel.page.html',
  styleUrls: ['./modifierpersonnel.page.scss'],
})
export class ModifierpersonnelPage implements OnInit {

  @Input() model_title : string;
  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  async closeModel(){
    const close :string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

}
