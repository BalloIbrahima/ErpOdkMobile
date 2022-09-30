import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-notification',
  templateUrl: './popup-notification.page.html',
  styleUrls: ['./popup-notification.page.scss'],
})
export class PopupNotificationPage implements OnInit {
  p:number = 1;
  constructor() { }
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

  }

  ngOnInit() {
  }

}
