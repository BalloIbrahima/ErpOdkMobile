import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ListeService } from '../services/listes/liste.service';
import { TirageService } from '../services/tirage/tirage.service';

@Component({
  selector: 'app-popupdtirage',
  templateUrl: './popupdtirage.page.html',
  styleUrls: ['./popupdtirage.page.scss'],
})
export class PopupdtiragePage implements OnInit {
  a : number=1;
  date = new Date();
  tirage: any;
  constructor(private modalController: ModalController,private tirageService:TirageService) { }
  @Input() valider: boolean;

  
  idtirage
  Utilisateur
  data;
  ngOnInit() {

    console.log(this.data)
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;
    
  }

  async validerPopup() {
    const close: string = "Tirage validé !";
    this.valider = true
    await this.modalController.dismiss(close);
    //alert(close)
  }
  // ValiderT(idtirage){
  //   this.tirageService.ValiderTirage(this.Utilisateur.login, this.Utilisateur.password,this.idtirage).subscribe(retour=>{
  //     this.tirage=retour.data
  //     console.log(this.tirage)
  //   })
  //   this.validerPopup()
  // }

  async annulerPopup() {
    const close: string = "Tirage annulé !";
    await this.modalController.dismiss(close);
    this.valider = false
    //alert(close)
  }


}
