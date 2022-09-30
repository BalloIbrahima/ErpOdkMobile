import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nouvelle-entite',
  templateUrl: './nouvelle-entite.page.html',
  styleUrls: ['./nouvelle-entite.page.scss'],
})
export class NouvelleEntitePage implements OnInit {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  @Input() model_title: string;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  async closeModel(){
    const close = 'Modal Removed';
    await this.modalController.dismiss(close);
  }

}
