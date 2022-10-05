import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ListeService } from '../services/listes/liste.service';

@Component({
  selector: 'app-popupdtirage',
  templateUrl: './popupdtirage.page.html',
  styleUrls: ['./popupdtirage.page.scss'],
})
export class PopupdtiragePage implements OnInit {
  a : number=1;
  
  constructor(private modalController: ModalController,private listeService:ListeService) { }
  @Input() valider: boolean;
  @Input() donnee_tableau: string;
  ngOnInit() {
    

  }

  async validerPopup() {
    const close: string = "Tirage validé !";
    this.valider = true
    await this.modalController.dismiss(close);
    //alert(close)
  }

  async annulerPopup() {
    const close: string = "Tirage annulé !";
    await this.modalController.dismiss(close);
    this.valider = false
    //alert(close)
  }

}
