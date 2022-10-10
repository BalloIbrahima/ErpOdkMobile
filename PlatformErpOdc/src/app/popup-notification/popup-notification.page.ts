import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotificationService } from '../services/notification/notification.service';

@Component({
  selector: 'app-popup-notification',
  templateUrl: './popup-notification.page.html',
  styleUrls: ['./popup-notification.page.scss'],
})
export class PopupNotificationPage implements OnInit {
  p:number = 1;
  Utilisateur: any;
  notif: any;
  notifTotal: any;
  constructor(private popoverCtrl:PopoverController,private notificationService:NotificationService) { }
  // salleactivites=[
  //   {
  //     user:"Fatoumata Kalogo",
  //     activite:"activité",
  //   },
  //   {
  //     user:"Fatoumata Kalogo",
  //     activite:"activité",
  //   },
  //   {
  //     user:"Fatoumata Kalogo",
  //     activite:"activité",
  //   },
  //   {
  //     user:"Fatoumata Kalogo",
  //     activite:"activité",
  //   },
  //   {
  //     user:"Fatoumata Kalogo",
  //     activite:"activité",
  //   },
  //   {
  //     user:"Fatoumata Kalogo",
  //     activite:"activité",
  //   },
  // ]
  close(){
    this.popoverCtrl.dismiss()
  }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
    
    this.notificationService.GetAllNotif(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
          this.notif=retour.data;
          console.log(this.notif)
          this.notifTotal=retour.data.length
          console.log(this.notif)
        })
  }

}
