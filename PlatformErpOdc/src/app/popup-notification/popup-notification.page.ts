import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popup-notification',
  templateUrl: './popup-notification.page.html',
  styleUrls: ['./popup-notification.page.scss'],
})
export class PopupNotificationPage implements OnInit {
  p:number = 1;
  constructor(private popoverCtrl:PopoverController) { }
  salleactivites=[
    {
      user:"Fatoumata Kalogo",
      activite:"activité",
    },
    {
      user:"Fatoumata Kalogo",
      activite:"activité",
    },
    {
      user:"Fatoumata Kalogo",
      activite:"activité",
    },
    {
      user:"Fatoumata Kalogo",
      activite:"activité",
    },
    {
      user:"Fatoumata Kalogo",
      activite:"activité",
    },
    {
      user:"Fatoumata Kalogo",
      activite:"activité",
    },
  ]
  close(){
    this.popoverCtrl.dismiss()
  }

  ngOnInit() {
  }

}
