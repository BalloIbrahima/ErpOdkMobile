import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
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
  TirageSelect: any;
  idtira: any;
  tiraget: any;
  constructor(private modalController: ModalController,private tirageService:TirageService,private navCltr:NavController) { }
  @Input() valider: boolean;

  
  
  Utilisateur;
  data;
  
  
  ngOnInit() {
    console.log(this.data)
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;
  }

  async validerPopup() {
    Swal.fire({
      title:'Tirage Valider',
      icon:'success',
      heightAuto: false,
      confirmButtonColor:'#FF7900',
      allowOutsideClick:false
  }).then(()=>{
    this.navCltr.navigateRoot("detail-liste");
  })
  await this.modalController.dismiss(close);
  }
  ValiderT(idtirage){
    const retour=this.data
    for(let i=0;i<retour.length;i++){
      this.tiraget=retour[i].tirage
      console.log(this.tiraget)
    }
    console.log(this.tiraget)
    this.tirageService.ValiderTirage(this.Utilisateur.login, this.Utilisateur.password,this.tiraget.id).subscribe(donnee=>{
      this.tirage=donnee.data
      console.log(this.tirage)
    })
    this.validerPopup()
  }

  async annulerPopup() {
    const close: string = "Tirage annulé !";
    await this.modalController.dismiss(close);
    this.valider = false
    //alert(close)
  }


  
}
